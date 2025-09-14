import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";
import { Webhook } from "svix";
import type { WebhookEvent } from "@clerk/nextjs/server";

const validatePayload = async (req: Request): Promise<WebhookEvent | undefined> => {
  const payload = await req.text();
  const svixHeaders = {
    "svix-id": req.headers.get("svix-id")!,
    "svix-timestamp": req.headers.get("svix-timestamp")!,
    "svix-signature": req.headers.get("svix-signature")!,
  };

  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error("CLERK_WEBHOOK_SECRET is not set");
    return undefined;
  }

  const webhook = new Webhook(webhookSecret);
  try {
    const event = webhook.verify(payload, svixHeaders) as WebhookEvent;
    return event;
  } catch (error) {
    console.error("Error validating Clerk webhook payload:", error);
    return undefined;
  }
};

const handleClerkWebhook = httpAction(async (ctx, req) => {
  const event = await validatePayload(req);
  if (!event) {
    return new Response("Invalid payload", { status: 400 });
  }

  console.log("Clerk webhook received:", event.type, event.data.id);

  try {
    if (event.type === "user.created") {
      console.log(`Creating user: ${event.data.id}`);
      await ctx.runMutation(internal.users.create, {
        username: event.data.username || "",
        imageUrl: event.data.image_url || "", 
        clerkId: event.data.id,
        email: event.data.email_addresses?.[0]?.email_address || "",
      });
    } else {
      console.log(`Unhandled webhook event type: ${event.type}`);
    }

    return new Response("Webhook processed successfully", { status: 200 });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return new Response("Internal server error", { status: 500 });
  }
});

// Register the webhook route
const http = httpRouter();
http.route({
  path: "/clerk-users-webhook",
  method: "POST",
  handler: handleClerkWebhook,
});

export default http;