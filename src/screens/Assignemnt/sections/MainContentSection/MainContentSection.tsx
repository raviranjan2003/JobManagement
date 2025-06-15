import { BriefcaseIcon, DollarSignIcon, MapPinIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";

// Job data to map over
const jobData = [
  {
    id: 1,
    title: "Full Stack Developer",
    logo: "/image-77-2.png",
    logoBackground:
      "linear-gradient(180deg,rgba(254,254,253,1) 0%,rgba(241,241,241,1) 100%)",
    experience: "1-3 yr Exp",
    locationType: "Onsite",
    salary: "12LPA",
    postedTime: "24h Ago",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
  },
  {
    id: 2,
    title: "Node Js Developer",
    logo: "/image-79.png",
    logoBackground:
      "linear-gradient(180deg,rgba(254,254,253,1) 0%,rgba(241,241,241,1) 100%)",
    logoContainerClass: "bg-white rounded-[102.5px]",
    experience: "1-3 yr Exp",
    locationType: "Onsite",
    salary: "12LPA",
    postedTime: "24h Ago",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    logo: "/image-78.png",
    logoBackground:
      "linear-gradient(180deg,rgba(254,254,253,1) 0%,rgba(241,241,241,1) 100%)",
    logoContainerClass: "bg-[#f7881f] rounded-[93.33px]",
    experience: "1-3 yr Exp",
    locationType: "Onsite",
    salary: "12LPA",
    postedTime: "24h Ago",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
  },
  {
    id: 4,
    title: "Full Stack Developer",
    logo: "/image-77-2.png",
    logoBackground:
      "linear-gradient(180deg,rgba(254,254,253,1) 0%,rgba(241,241,241,1) 100%)",
    experience: "1-3 yr Exp",
    locationType: "Onsite",
    salary: "12LPA",
    postedTime: "24h Ago",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <div className="flex flex-wrap gap-4 mt-[265px] ml-16">
      {jobData.map((job) => (
        <Card
          key={job.id}
          className="w-[316px] h-[360px] relative rounded-xl shadow-[0px_0px_14px_#d3d3d326] overflow-hidden"
        >
          <CardContent className="p-0">
            {/* Logo Container */}
            <div
              className="absolute w-[83px] h-[82px] top-4 left-4 rounded-[13.18px] overflow-hidden border border-solid border-white shadow-[0px_0px_10.25px_#94949440]"
              style={{ background: job.logoBackground }}
            >
              {job.logoContainerClass ? (
                <div
                  className={`relative w-[66px] h-[66px] top-2 left-[9px] overflow-hidden ${job.logoContainerClass}`}
                >
                  <img
                    className={
                      job.id === 2
                        ? "absolute w-[45px] h-[45px] top-3.5 left-2.5"
                        : job.id === 3
                          ? "absolute w-[51px] h-[51px] top-0.5 left-0.5"
                          : "w-full h-full object-cover"
                    }
                    alt={`${job.title} logo`}
                    src={job.logo}
                  />
                </div>
              ) : (
                <img
                  className="absolute w-[66px] h-[66px] top-2 left-[9px] object-cover"
                  alt={`${job.title} logo`}
                  src={job.logo}
                />
              )}
            </div>

            {/* Posted Time Badge */}
            <Badge className="absolute top-4 left-[222px] bg-[#afd8ff] text-black font-medium px-2.5 py-[7px] rounded-[10px]">
              {job.postedTime}
            </Badge>

            {/* Job Title */}
            <h3 className="absolute top-[116px] left-4 font-bold text-black text-xl [font-family:'Satoshi_Variable-Bold',Helvetica]">
              {job.title}
            </h3>

            {/* Job Details */}
            <div className="inline-flex items-center gap-4 absolute top-40 left-4">
              <div className="inline-flex items-center gap-1">
                <BriefcaseIcon className="h-4 w-4 text-[#5a5a5a]" />
                <span className="[font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-[#5a5a5a] text-base">
                  {job.experience}
                </span>
              </div>

              <div className="inline-flex items-center gap-1">
                <MapPinIcon className="h-4 w-4 text-[#5a5a5a]" />
                <span className="[font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-[#5a5a5a] text-base">
                  {job.locationType}
                </span>
              </div>

              <div className="inline-flex items-center gap-1">
                <DollarSignIcon className="h-4 w-4 text-[#5a5a5a]" />
                <span className="[font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-[#5a5a5a] text-base">
                  {job.salary}
                </span>
              </div>
            </div>

            {/* Job Description */}
            <p className="absolute w-[300px] top-[201px] left-[9px] [font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-[#555555] text-sm whitespace-pre-line">
              {job.description}
            </p>
          </CardContent>

          <CardFooter className="absolute bottom-4 left-4 p-0">
            <Button className="w-[284px] bg-[#00aaff] hover:bg-[#0099e6] rounded-[10px] border border-solid shadow-[0px_0px_14px_#5c5c5c26] [font-family:'Satoshi_Variable-Bold',Helvetica] font-bold">
              Apply Now
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
