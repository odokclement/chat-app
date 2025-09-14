import ItemList from "@/components/Shared/item-list/itemList";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex h-screen gap-4 p-4">
      <ItemList title="Conversations">
        {/* Sidebar content - conversation list items would go here */}
      </ItemList>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default Layout;