import { BriefcaseIcon, MapPinIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Separator } from "../../../../components/ui/separator";

export const NavbarSection = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    "Home",
    "Find Jobs",
    "Find Talents",
    "About us",
    "Testimonials",
  ];

  return (
    <header className="w-full bg-white shadow-[0px_0px_14px_#c5bfbf40]">
      <div className="container mx-auto px-4 py-4">
        {/* Top navigation bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/logo.svg" alt="Logo" className="h-10 w-10" />
            </div>

            {/* Navigation links */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-medium text-gray-700 hover:text-gray-900"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Create Jobs button */}
          <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full">
            Create Jobs
          </Button>
        </div>

        {/* SearchIcon filters section */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          {/* SearchIcon by job title */}
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
            <Input
              className="pl-10 h-12 w-full border rounded-md font-medium text-[#686868]"
              placeholder="SearchIcon By Job Title, Role"
            />
          </div>

          <Separator orientation="vertical" className="hidden md:block h-12" />

          {/* Preferred location */}
          <div className="relative flex-1">
            <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
            <Select>
              <SelectTrigger className="pl-10 h-12 w-full border rounded-md font-medium text-[#686868]">
                <SelectValue placeholder="Preferred Location" />
              </SelectTrigger>
              <SelectContent>
                {/* Location options would go here */}
              </SelectContent>
            </Select>
          </div>

          <Separator orientation="vertical" className="hidden md:block h-12" />

          {/* Job type */}
          <div className="relative flex-1">
            <BriefcaseIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
            <Select>
              <SelectTrigger className="pl-10 h-12 w-full border rounded-md font-medium text-[#686868]">
                <SelectValue placeholder="Job type" />
              </SelectTrigger>
              <SelectContent>
                {/* Job type options would go here */}
              </SelectContent>
            </Select>
          </div>

          <Separator orientation="vertical" className="hidden md:block h-12" />

          {/* Salary range */}
          <div className="flex-1">
            <div className="flex justify-between mb-2">
              <span className="font-bold text-[#222222] text-base">
                Salary Per Month
              </span>
              <span className="font-bold text-[#222222] text-base">
                ₹50k - ₹80k
              </span>
            </div>
            <div className="relative h-4 flex items-center">
              <div className="absolute w-full h-0.5 bg-gray-200"></div>
              <div className="absolute w-[170px] h-0.5 bg-gray-200"></div>
              <div className="absolute left-0 w-[15px] h-[15px] bg-white rounded-[7.5px] border-[5px] border-solid border-black"></div>
              <div className="absolute left-[170px] w-[15px] h-[15px] bg-white rounded-[7.5px] border-[5px] border-solid border-black"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
