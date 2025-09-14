import { Card } from "@/components/ui/card";

const converstionFallback = () => {
    return ( 
        <Card className="hidden lg:flex h-full w-full items-center justify-center bg-secondary text-secondary-foreground">
          select/start a conversation
        </Card>
     );
}
 
export default converstionFallback;