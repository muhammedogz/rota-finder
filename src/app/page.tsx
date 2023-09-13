import BackgroundImage from "@/components/BackgroundImage";
import Caption from "@/components/Caption";
import ProfileForm from "@/components/form/FindRoteForm";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-2 grid-rows-2">
      <BackgroundImage />
      <div></div>
      <div></div>
      <Caption />
      <div>
        <ProfileForm />
      </div>
    </div>
  );
}
