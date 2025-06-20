'use client';

import type { Icon } from '@tabler/icons-react';
import { IconCirclePlusFilled, IconMail } from '@tabler/icons-react';

import { Button } from '~/components/ui/button';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '~/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type NavLink = {
  url: string;
  title: string;
  icon?: Icon;
};

export function NavMain({ items }: { items: NavLink[] }) {
  const pathName = usePathname()

  const isMenuItemActive = (url: string) => {
    // Logic to determine if the menu item is active
    // This can be based on the current URL or other criteria
    return url === pathName;
  };

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Quick Create"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
            >
              <IconCirclePlusFilled />
              <span>Create Monitor</span>
            </SidebarMenuButton>
            <Button size="icon" className="size-8 group-data-[collapsible=icon]:opacity-0" variant="outline">
              <IconMail />
              <span className="sr-only">Inbox</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map(item => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton isActive={isMenuItemActive(item.url)} tooltip={item.title} asChild>
                <Link href={item.url}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
