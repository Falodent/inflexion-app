"use client";

import { SideMenuItems } from "@/content/activity";
import SideMenu from "./side-menu";

interface Props {
  active: number;
  progress: number;
}

const Sidebar = ({ active, progress }: Props) => {
  return (
    <div className="w-full h-[550px] flex gap-12 sticky top-0">
      <div className="relative w-1 h-full bg-[#D6DAE0] overflow-hidden">
        <div
          className="absolute left-0 top-0 w-full bg-blue-100 transition-all ease-in-out duration-0"
          style={{ height: `${progress * 100}%` }}
        />
      </div>

      <div className="flex flex-col gap-[57px] h-[550vh] overflow-y-auto">
        {SideMenuItems.map((item) => (
          <SideMenu
            key={item.title}
            content={item.content}
            ideal={item.ideal}
            title={item.title}
            subtitle={item.subtitle}
            isActive={item.id === active}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
