import React from "react";
import { HeaderSection } from "./sections/HeaderSection";
import { JobListingsSection } from "./sections/JobListingsSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavbarSection } from "./sections/NavbarSection";

export const Assignemnt = (): JSX.Element => {
  return (
    <div className="bg-[#fbfbff] flex flex-col w-full min-h-screen">
      <HeaderSection />
      <NavbarSection />
      <MainContentSection />
      <JobListingsSection />
    </div>
  );
};
