import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const NavigationSidebarSection = (): JSX.Element => {
  // Navigation menu items data
  const navigationItems = [
    {
      title: "Dashboard",
      icon: "/home-fill0-wght400-grad0-opsz24-1.svg",
      isActive: true,
    },
    {
      title: "Assigned startups",
      icon: "/vector-1.svg",
      multiline: true,
    },
    {
      title: "Personal Schedule",
      icon: "/fire-hydrant-fill0-wght400-grad0-opsz24-1.svg",
      multiline: true,
    },
    {
      title: "Session Management",
      icon: "/inventory-2-fill0-wght400-grad0-opsz24--1--1.svg",
      multiline: true,
    },
    {
      title: "Contacts",
      icon: "/contacts-fill0-wght400-grad0-opsz24-2.svg",
    },
    {
      title: "Resources",
      icon: "/leaderboard-fill0-wght400-grad0-opsz24-1.svg",
    },
    {
      title: "Performance and Task manager",
      icon: "/vector-3.svg",
      multiline: true,
      lines: 3,
    },
    {
      title: "Settings",
      icon: "/settings-fill0-wght400-grad0-opsz24-1.svg",
    },
    {
      title: "Sign Out",
      icon: "/logout-fill0-wght400-grad0-opsz24-1.svg",
    },
  ];

  return (
    <nav className="w-[258px] h-full bg-[#fafbfc]">
      <div className="relative h-full">
        <div className="h-full bg-[#fafbfc]">
          <div className="pt-[43px] px-8 font-headline-large font-[number:var(--headline-large-font-weight)] text-[#333333] text-[length:var(--headline-large-font-size)] tracking-[var(--headline-large-letter-spacing)] leading-[var(--headline-large-line-height)] whitespace-nowrap [font-style:var(--headline-large-font-style)]">
            OMNI
          </div>

          <div className="flex flex-col gap-10 mt-32 px-8">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start ${index === 0 ? "h-11" : item.multiline ? (item.lines === 3 ? "h-[84px]" : "h-[58px]") : "h-8"}`}
              >
                {index === 0 && (
                  <div className="absolute w-48 h-11 -left-3 bg-[#ccffff99] rounded-[10px]" />
                )}
                <img
                  className={`w-8 h-8 ${item.title === "Performance and Task manager" ? "w-[21px] h-[27px]" : ""}`}
                  alt={item.title}
                  src={item.icon}
                />
                <div
                  className={`ml-6 ${index === 0 ? "[font-family:'REM',Helvetica] font-normal text-[22px] tracking-[-0.06px] leading-7" : "font-title-large font-[number:var(--title-large-font-weight)] text-[length:var(--title-large-font-size)] tracking-[var(--title-large-letter-spacing)] leading-[var(--title-large-line-height)] [font-style:var(--title-large-font-style)]"} text-[#636060]`}
                >
                  {item.multiline ? (
                    item.title === "Performance and Task manager" ? (
                      <>
                        Performance
                        <br />
                        and <br />
                        Task manager
                      </>
                    ) : item.title === "Assigned startups" ? (
                      <>
                        Assigned
                        <br />
                        startups
                      </>
                    ) : item.title === "Personal Schedule" ? (
                      <>
                        Personal <br />
                        Schedule
                      </>
                    ) : item.title === "Session Management" ? (
                      <>
                        Session <br />
                        Management
                      </>
                    ) : (
                      item.title
                    )
                  ) : (
                    item.title
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute w-[38px] h-10 top-11 right-0 bg-[#ececec] rounded-[10px] border border-solid border-[#979797]"
        >
          <ChevronLeftIcon className="h-4 w-2.5" />
        </Button>
      </div>
    </nav>
  );
};
