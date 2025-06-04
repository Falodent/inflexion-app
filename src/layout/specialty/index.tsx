import PageEntrance from "@/components/entrance";
import { Check } from "lucide-react";

const Specialty = () => {
  return (
    <PageEntrance className="w-full bg-white py-20 lg:py-40 px-4 lg:px-32 flex flex-col gap-20 lg:gap-[98px]">
      <p className="max-w-[350px] md:max-w-[800px] font-[750] text-[40px] md:text-[62px] leading-[90%] -tracking-[0.02em] lg:-tracking-[0.01em] uppercase">
        Your Seasonality is Our Specialty
      </p>

      <div className="max-w-[350px] md:max-w-full flex flex-col gap-8">
        <div className="flex items-center gap-5">
          <Check color="#0000FF" size={24} className="shrink-0"/>

          <p className="text-xl -tracking-[0.01em] text-black">
            <span className="font-[700]">Pre-allocated capacity</span> for peak
            times or earnings season
          </p>
        </div>

        <div className="flex items-center gap-5">
          <Check color="#0000FF" size={24} className="shrink-0" />

          <p className="text-xl -tracking-[0.01em] text-black">
            <span className="font-[700]">Expedited onboarding</span> to
            streamline integrations and ramp-ups
          </p>
        </div>

        <div className="flex items-center gap-5">
          <Check color="#0000FF" size={24} className="shrink-0" />

          <p className="text-xl -tracking-[0.01em] text-black">
            <span className="font-[700]">Backlog processing -</span> create
            content libraries from years of audio fast
          </p>
        </div>
      </div>
    </PageEntrance>
  );
};

export default Specialty;
