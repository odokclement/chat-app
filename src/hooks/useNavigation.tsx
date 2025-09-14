import { MessagesSquare, User } from "lucide-react"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

export const useNavigation = () => {

    const pathName = usePathname()

    const paths = useMemo(() => [
        {
            name: "Conversations",
            href: "/conversations",
            active: pathName.startsWith("/conversations"),
            icon: <MessagesSquare />
        },
        {
            name: "friends",
            href: "/friends",
            active: pathName.startsWith("/friends"),
            icon: <User />
        }
     
    ],
 [pathName]);
return paths;
}