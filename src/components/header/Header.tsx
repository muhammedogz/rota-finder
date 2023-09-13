"use client";

import Logo from "@/components/header/Logo";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const ThemeSwitchButton = dynamic(
  () => import("@/components/button/ThemeSwitchButton"),
  { ssr: false }
);

const Header = () => {
  return (
    <div className="bg-background/20 absolute top-0 left-0 right-0">
      <div className="flex justify-between items-center px-10 py-5">
        <Logo />
        <div className="flex justify-end items-center gap-10 ">
          <div>link 1</div>
          <div>link 2</div>
          <ThemeSwitchButton />
          <Button size="icon" variant="secondary" asChild>
            <Link href="https://github.com/muhammedogz" target="_blank">
              <GithubIcon />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
