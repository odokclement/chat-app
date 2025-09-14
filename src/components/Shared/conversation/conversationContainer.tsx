import { Card } from "@/components/ui/card";
import React from "react";

type ConversationContainerProps = React.PropsWithChildren<object>;

const conversationContainer = ({children}:ConversationContainerProps) => {
    return ( 
        <Card className="w-full h-[calc(100svh-32px)] lg:h-full flex flex-col p-2 gap-2">
          {children}
        </Card>
     );
}
 
export default conversationContainer;