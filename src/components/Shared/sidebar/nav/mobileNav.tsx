"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
// import { useConversation } from "@/hooks/useConversation";
import { useNavigation } from "@/hooks/useNavigation";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import ModeToggle from "../../ThemeProvider/modeToggler";

const MobileNav = () => {
  const paths = useNavigation();

  // const isactive = useConversation();
  // if (isactive) {
  //   return null; // Hide the mobile nav when a conversation is active
  // }
  return (
    <Card className="lg:hidden fixed bottom-4 flex items-center h-16 p-4 w-[calc(100vw-32px)] ">
      <nav className="w-full ">
        <ul className="flex items-center justify-evenly ">
          {paths.map((path, id) => (
            <li key={id} className="relative">
              <Link href={path.href}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      variant={path.active ? "default" : "outline"}
                    >
                      {path.icon}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{path.name}</TooltipContent>
                </Tooltip>
              </Link>
            </li>
          ))}
          <li>
            <ModeToggle />
          </li>
          <li>
            <UserButton />
          </li>
        </ul>
      </nav>
    </Card>
  );
};

export default MobileNav;
