import BackgroundImage from "@/components/BackgroundImage";
import Caption from "@/components/Caption";
import ThemeSwitchButton from "@/components/button/ThemeSwitchButton";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-2 grid-rows-2 gap-0 border border-red-800">
      <div>
        <BackgroundImage />
      </div>
      <div>
        <ThemeSwitchButton>Test </ThemeSwitchButton>
      </div>
      <div>
        <Caption />
      </div>
      <div>
        <ThemeSwitchButton>Test </ThemeSwitchButton>
      </div>
    </div>
  );
}
