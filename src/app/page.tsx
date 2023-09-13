import BackgroundImage from "@/components/BackgroundImage";
import Caption from "@/components/Caption";
import FindRouteForm from "@/components/form/FindRouteForm";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-2 grid-rows-2">
      <BackgroundImage />
      <div></div>
      <div></div>
      <Caption />
      <div>
        <FindRouteForm />
      </div>
    </div>
  );
}
