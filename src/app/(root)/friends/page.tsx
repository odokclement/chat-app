import ItemList from "@/components/Shared/item-list/itemList";
import ConversationFallback from "@/components/Shared/conversation/conversationFallback";

const friendsPage = () => {
    return (  
        <div className="flex h-screen gap-4 p-4"> 
           <ItemList title="Friends">
            Friends Page
           </ItemList>
           <ConversationFallback />
        </div>
    );
}
 
export default friendsPage;