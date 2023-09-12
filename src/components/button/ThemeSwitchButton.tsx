"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

type ThemeSwitchButtonProps = ButtonProps;

const ThemeSwitchButton = ({ ...props }: ThemeSwitchButtonProps) => {
  const { theme, setTheme } = useTheme();

  const isLightMode = theme === "light";
  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={() => setTheme(isLightMode ? "dark" : "light")}
    >
      {isLightMode ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ThemeSwitchButton;
