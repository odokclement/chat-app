import { SidebarWrapper } from "@/components/Shared/sidebar/sidebarWrapper";

type Props = React.PropsWithChildren<object>;

const Layout = ({ children }: Props) => {
  return <SidebarWrapper>{children}</SidebarWrapper>;
};

export default Layout;
