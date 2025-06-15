import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeaderSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Find Jobs", href: "#" },
    { label: "Find Talents", href: "#" },
    { label: "About us", href: "#" },
    { label: "Testimonials", href: "#" },
  ];

  return (
    <header className="flex justify-center w-full mt-5">
      <div className="flex items-center justify-between w-[890px] h-20 px-6 bg-white rounded-[122px] border border-solid border-[#fcfcfc] shadow-[0px_0px_20px_#7f7f7f26]">
        {/* Logo */}
        <div className="w-11 h-[45px] bg-[url(/clip-path-group.png)] bg-[100%_100%]" />

        {/* Navigation Menu */}
        <NavigationMenu className="mx-4">
          <NavigationMenuList className="flex space-x-2">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={item.href}
                  className="inline-flex items-center justify-center px-6 py-2 rounded-[10px] [font-family:'Satoshi_Variable-Bold',Helvetica] font-bold text-dark-black text-base"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Create Jobs Button */}
        <Button className="h-10 px-6 rounded-[30px] [font-family:'Satoshi_Variable-Bold',Helvetica] font-bold text-base [background:linear-gradient(180deg,rgba(161,40,255,1)_0%,rgba(97,0,173,1)_100%)] hover:opacity-90">
          Create Jobs
        </Button>
      </div>
    </header>
  );
};
