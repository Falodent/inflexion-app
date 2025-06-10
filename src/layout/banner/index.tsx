import Button from "@/components/button";
import PageEntrance from "@/components/entrance";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const Banner = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <PageEntrance className="pt-12 sm:pt-32 pb-[25px] flex items-center justify-center w-full">
      <div className="w-full max-w-[420px] lg:max-w-[1180px] flex flex-col items-center gap-10 md:gap-20">
        <h2 className="font-[800] text-[46px] sm:text-[55px] sm:leading-[63px] lg:text-[86px] lg:leading-[92px] xl:text-[98px] xl:leading-[103px] -tracking-[0.04em] uppercase text-center">
          If your audio isn’t <span className="line-through">indexed</span>{" "}
          INFLXD yet…
        </h2>

        <p className="text-lg lg:text-xl font-[500] leading-[27px] lg:leading-[32px] max-w-[270px] lg:max-w-[654px] text-black text-center">
          You’re leaving significant money on the table. Own the IP to all your
          finance transcripts today and productise your libraries at scale.
        </p>

        <div className="max-w-[525px] flex flex-col md:flex-row items-center gap-7">
          <Button className="w-[230px]" handleClick={handleClick}>
            <span>BOOK A DEMO</span>
            <MoveRight />
          </Button>

          <Link href="/#how-it-works">
            <Button variant="secondary" className="w-[270px]">
              <span>SEE HOW IT WORKS</span>
              <MoveRight />
            </Button>
          </Link>
        </div>
      </div>
    </PageEntrance>
  );
};

export default Banner;
