"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { useTheme } from "next-themes";

type ThemeSwitchButtonProps = ButtonProps;

const ThemeSwitchButton = ({ ...props }: ThemeSwitchButtonProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      {...props}
    />
  );
};

export default ThemeSwitchButton;
