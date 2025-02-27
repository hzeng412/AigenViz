// src/components/dashboard/SidebarItem.tsx
'use client';
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  icon: string;
  text: string;
  path: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, path }) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link href={path}>
      <div 
        className={`flex items-center px-4 py-3 cursor-pointer transition-colors duration-200 relative ${
          isActive 
            ? "bg-green-50 text-green-600" 
            : "hover:bg-gray-50 text-gray-700"
        }`}
      >
        {/* Active indicator - absolute positioned so it doesn't affect layout */}
        {isActive && (
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-600"></div>
        )}
        <div className="w-6 h-6 mr-3">
          <Image 
            src={icon} 
            alt={text} 
            width={24} 
            height={24} 
          />
        </div>
        <span className="text-sm font-medium">{text}</span>
      </div>
    </Link>
  );
};