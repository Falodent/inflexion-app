import Image from "next/image";

const InflxdTable = () => {
  return (
    <section className="w-full bg-white py-40 px-32 flex flex-col gap-[80px]">
      <div className="flex flex-col gap-[50px]">
        <p className="font-[750] text-[62px] leading-[90%] -tracking-[0.02em] uppercase">
          Your Audio. <br />
          Your Transcripts. <br />
          Your IP. Forever.
        </p>

        <p className="max-w-[646px] font-[500] text-xl leading-[28px] text-black">
          Every transcript is delivered as{" "}
          <span className="font-[700]">work-for-hire.</span> INFLXD claims zero
          ownership rights. No usage restrictions. No licensing fees. Ever.
        </p>
      </div>

      <div className="w-full relative h-[550px]">
        <Image
          src="/assets/png/table.png"
          alt="Inflxd Table"
          fill
          className="w-full h-[390px] object-contain"
        />
      </div>

      <div className="flex flex-col mt-10 gap-[46px]">
        <p className="font-[500] text-xl -tracking-[0.01em] text-black">
          What this means:
        </p>

        <p className="max-w-[970px] text-[40px] leadin-[48px] font-[500] -tracking-[0.03em]">
          You own 100% of all transcripts and can use them however you want —
          build products, train AI models, resell to clients, create new revenue
          streams.
        </p>
      </div>

      <p className="italic text-lg leading-[32px] -tracking-[0.01em] text-[#00000099]">
        We never claim rights. We&apos;re a service provider, not a data owner.
      </p>
    </section>
  );
};

export default InflxdTable;
