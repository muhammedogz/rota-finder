import Image from "next/image";

const BackgroundImage = () => {
  return (
    <div className="fixed top-0 left-0 min-h-screen min-w-full w-screen -z-10 blur-sm">
      <Image
        src="/images/hero.jpg"
        alt="Picture of the an airplane"
        fill
        quality={100}
      />
    </div>
  );
};

export default BackgroundImage;
