import { PropsWithChildren } from 'react';
import DesktopNav from './nav/desktopNav';
import MobileNav from './nav/mobileNav';

type Props = PropsWithChildren<object>;

export const SidebarWrapper = ({children}: Props) => {
    return ( 
        <div className='w-full h-full flex flex-col p-4 lg:flex-row lg:gap-4'>
            <MobileNav />
            <DesktopNav />
            <main className='h-[calc(100%-80px)] lg:h-full w-full flex flex-col gap-4 '>
             {children}
            </main>
            
        </div>
    );
}