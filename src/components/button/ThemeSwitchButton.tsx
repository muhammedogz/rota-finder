"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type ThemeSwitchButtonProps = ButtonProps;

const ThemeSwitchButton = ({ ...props }: ThemeSwitchButtonProps) => {
  const { theme, setTheme } = useTheme();
  const [isLightMode, setIsLightMode] = useState(theme === "light");

  useEffect(() => {
    setIsLightMode(theme === "light");
  }, [theme]);

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
