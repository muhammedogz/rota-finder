import { Typography } from "@/components/ui/typography";

const Caption = () => {
  return (
    <div className="flex flex-col items-start p-10">
      <Typography variant="h1" className="text-foreground">
        BOOK YOUR FLIGHT
      </Typography>
      <Typography variant="h2" className="text-foreground">
        AND ENJOY YOUR TRIP
      </Typography>
      <div className="flex gap-3">
        <Typography variant="h2" className="text-foreground">
          IN
        </Typography>
        <Typography
          variant="h2"
          className="text-background border-b-2 text-5xl
          hover:scale-110 transform transition-all duration-500 ease-in-out
          "
        >
          NO TIME
        </Typography>
      </div>
    </div>
  );
};

export default Caption;
