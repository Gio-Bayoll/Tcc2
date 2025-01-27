"use client";
import React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Logo from "@/assets/log.png";
import { MenuItens } from "./Menu-Itens";

export const Menu: React.FC = () => {
  return (
    <nav className="p-4 bg-white dark:bg-gray-800 shadow-md flex items-center">
      <div className="flex w-6/12 items-center justify-between">
        <NavigationMenu className="ml-32">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className="text-xl font-bold text-slate-700 dark:text-white flex items-center space-x-2"
              >
                <img src={Logo} alt="Logo" width={80} height={80} />
                <h1 className="hidden sm:block">Dengue Check</h1>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu className="flex justify-center">
          <MenuItens />
        </NavigationMenu>
      </div>
    </nav>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
