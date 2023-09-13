import { Typography } from "@/components/ui/typography";
import { Rotate3DIcon } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-1">
      <Rotate3DIcon className="text-red-500" />
      <Typography variant="h3">ROTA</Typography>
      <Typography variant="h3">Finder</Typography>
    </div>
  );
};

export default Logo;
