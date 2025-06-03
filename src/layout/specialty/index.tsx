import PageEntrance from "@/components/entrance";
import { Check } from "lucide-react";

const Specialty = () => {
  return (
    <PageEntrance className="w-full bg-white py-40 px-32 flex flex-col gap-[98px]">
      <p className="max-w-[800px] font-[750] text-[62px] leading-[90%] -tracking-[0.01em] uppercase">
        Your Seasonality is Our Specialty
      </p>

      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-5">
          <Check color="#0000FF" size={24} />

          <p className="text-xl -tracking-[0.01em] text-black">
            <span className="font-[700]">Pre-allocated capacity</span> for peak
            times or earnings season
          </p>
        </div>

        <div className="flex items-center gap-5">
          <Check color="#0000FF" size={24} />

          <p className="text-xl -tracking-[0.01em] text-black">
            <span className="font-[700]">Expedited onboarding</span> to
            streamline integrations and ramp-ups
          </p>
        </div>

        <div className="flex items-center gap-5">
          <Check color="#0000FF" size={24} />

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
