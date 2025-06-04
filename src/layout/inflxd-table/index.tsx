import PageEntrance from "@/components/entrance";
import Image from "next/image";

const InflxdTable = () => {
  return (
    <PageEntrance className="w-full bg-white py-20 lg:py-40 px-4 lg:px-32 flex flex-col gap-[80px]">
      <div className="flex flex-col gap-[50px]">
        <p className="max-w-[380px] md:max-w-full font-[750] text-[53px] leading-[54px] md:text-[62px] md:leading-[90%] -tracking-[0.02em] uppercase">
          Your Audio. <br />
          Your Transcripts. <br />
          Your IP. Forever.
        </p>

        <p className="max-w-[320px] md:max-w-[646px] font-[500] text-lg lg:text-xl leading-[28px] text-black">
          Every transcript is delivered as{" "}
          <span className="font-[700]">work-for-hire.</span> INFLXD claims zero
          ownership rights. No usage restrictions. No licensing fees. Ever.
        </p>
      </div>

      <div className="w-full overflow-x-auto lg:overflow-visible scrollbar-none pr-8 lg:pr-0">
        <div className="relative min-w-[1000px] lg:min-w-0 h-[390px] lg:h-[550px]">
          <Image
            src="/assets/png/table.png"
            alt="Inflxd Table"
            width={1200}
            height={390}
            className="object-cover lg:object-contain object-left-top"
          />
        </div>
      </div>

      <PageEntrance className="flex flex-col mt-10 gap-[46px]">
        <p className="font-[500] text-xl -tracking-[0.01em] text-black">
          What this means:
        </p>

        <p className="max-w-[325px] md:max-w-[970px] text-[32px] md:text-[40px] leading-[48px] font-[500] -tracking-[0.03em]">
          You own 100% of all transcripts and can use them however you want —
          build products, train AI models, resell to clients, create new revenue
          streams.
        </p>

        <p className="max-w-[325px] md:max-w-full italic text-lg leading-[32px] -tracking-[0.01em] text-[#00000099]">
          We never claim rights. We&apos;re a service provider, not a data
          owner.
        </p>
      </PageEntrance>
    </PageEntrance>
  );
};

export default InflxdTable;
