
import ConversationFallback from "@/components/Shared/conversation/conversationFallback";

const conversationPage = () => {
    return ( 
        <div className="flex h-screen gap-4 p-4">
            <ConversationFallback />
        </div>
     );
}
 
export default conversationPage;