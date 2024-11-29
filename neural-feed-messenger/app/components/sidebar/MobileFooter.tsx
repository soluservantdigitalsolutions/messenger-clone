"use client";
import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import React from "react";
import MobileItem from "./MobileItem";

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    null;
  }
  return (
    <div
      className="
    lg:hidden
    fixed
    justify-between
    w-full
    bottom-0
    z-40
    flex
    items-center
    bg-white
    border-t-[1px]
    "
    >
      {routes.map((route) => (
        <MobileItem
          key={route.href}
          href={route.href}
          onClick={route.onClick}
          icon={route.icon}
          active={route.active}
        />
      ))}
    </div>
  );
};

export default MobileFooter;
