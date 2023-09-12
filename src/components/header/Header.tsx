"use client";

import dynamic from "next/dynamic";

const ThemeSwitchButton = dynamic(
  () => import("@/components/button/ThemeSwitchButton"),
  { ssr: false }
);

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0">
      <div className="flex justify-end items-center gap-10 p-10">
        <div>logo</div>
        <div>
          <div>link 1</div>
          <div>link 2</div>
        </div>
        <ThemeSwitchButton />
      </div>
    </div>
  );
};

export default Header;
