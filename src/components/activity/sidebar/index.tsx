"use client";

import { SideMenuItems } from "@/content/activity";
import SideMenu from "./side-menu";

interface Props {
  active: number;
  progress: number;
  handleClick: (value: number) => void;
}

const Sidebar = ({ active, progress, handleClick }: Props) => {
  return (
    <div className="w-full h-[550px] flex gap-5 xl:gap-12 sticky top-0">
      <div className="relative w-[4px] h-full">
        <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-[#D6DAE0]" />

        <div
          className="absolute left-0 top-0 w-[4px] bg-blue-100"
          style={{ height: `${progress * 100}%` }}
        />
      </div>

      <div className="flex flex-col gap-[57px]">
        {SideMenuItems.map((item) => (
          <SideMenu
            key={item.title}
            content={item.content}
            ideal={item.ideal}
            title={item.title}
            subtitle={item.subtitle}
            isActive={item.id === active}
            handleClick={() => handleClick(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
