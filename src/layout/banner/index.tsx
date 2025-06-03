import Button from "@/components/button";
import PageEntrance from "@/components/entrance";
import { MoveRight } from "lucide-react";

const Banner = () => {
  return (
    <PageEntrance className="pt-32 pb-[25px] flex items-center justify-center w-full">
      <div className="max-w-[1180px] flex flex-col items-center gap-20">
        <h2 className="font-[800] text-[98px] leading-[103px] -tracking-[0.04em] uppercase text-center">
          If your audio isn’t <span className="line-through">indexed</span>{" "}
          INFLXD yet…
        </h2>

        <p className="text-xl font-[500] leading-[32px] max-w-[654px] text-black text-center">
          You’re leaving significant money on the table. Own the IP to all your
          finance transcripts today and productise your libraries at scale.
        </p>

        <div className="max-w-[525px] flex items-center gap-7">
          <Button className="w-[230px]">
            <span>BOOK A DEMO</span>
            <MoveRight />
          </Button>

          <Button variant="secondary" className="w-[270px]">
            <span>SEE HOW IT WORKS</span>
            <MoveRight />
          </Button>
        </div>
      </div>
    </PageEntrance>
  );
};

export default Banner;
