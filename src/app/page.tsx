import BackgroundImage from "@/components/BackgroundImage";
import Caption from "@/components/Caption";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-2 grid-rows-2 gap-0 border border-red-800">
      <BackgroundImage />
      <div></div>
      <div></div>
      <Caption />
      <div></div>
    </div>
  );
}
