"use client";
import React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export const MenuItens: React.FC = () => {
  return (
    <NavigationMenuList>
      <NavigationMenuItem >
          <Link to={'/'}>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
              Início
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Doenças do Aedes</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
            <ListItem href="/Doencas/Dengue" title="Dengue">
            Dengue é uma doença viral transmitida pelo mosquito Aedes aegypti.
            </ListItem>
            <ListItem href="/Doencas/ZikaVirus" title="Zika Virus">
            Zika é uma doença causada pelo vírus Zika, também transmitida pelo
            Aedes aegypti.
            </ListItem>
            <ListItem href="/Doencas/Chikungunya" title="Chikungunya">
            Chikungunya é uma doença viral transmitida pelo mosquito Aedes.
            </ListItem>
            <ListItem href="/Doencas/FebreAmarela" title="Febre Amarela">
            Febre Amarela é uma doença viral transmitida por mosquitos em áreas tropicais.
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Entenda mais</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
            <ListItem href="Sintomas" title="Verificar Sintomas">
              Faça um teste e verifique caso você tenha sintomas de alguma doença.
            </ListItem>
            <ListItem href="AcompanharCasos" title="Acompanhar Casos">
              Veja em tempo real os casos de doenças transmitidas pelo Aedes.
            </ListItem>
            <ListItem href="EncontrarPostos" title="Encontrar Postos">
              Encontre postos de saúde próximos a você.
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
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
