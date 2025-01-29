import * as React from "react";
import { SidebarItemProps } from "./types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  text,
  path = "/",
}) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link href={path}>
      <div
        className={`flex gap-3.5 p-3 w-full rounded-lg cursor-pointer transition-colors ${
          isActive ? "bg-neutral-500" : "bg-black bg-opacity-0 hover:bg-neutral-200"
        }`}
      >
        <div className="flex overflow-hidden justify-center items-center min-h-[26px]">
          <img
            loading="lazy"
            src={icon}
            alt=""
            className="object-contain self-stretch my-auto aspect-square w-[26px]"
          />
        </div>
        <div
          className={`grow shrink text-lg font-bold tracking-wide leading-none ${
            isActive ? "text-white" : "text-zinc-800"
          } w-[139px]`}
        >
          {text}
        </div>
      </div>
    </Link>
  );
};