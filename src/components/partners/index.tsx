import Image from "next/image";

// content
import { PartnersList } from "@/content/partners";

const Clients = () => {
  return (
    <section className="w-full border-y border-black-100 py-8 pl-7 overflow-hidden grid grid-cols-[400px_1fr] items-center gap-20">
      <p className="w-full font-jetbrains whitespace-nowrap font-[500] text-xs tracking-[0.05em] uppercase text-black-100">
        Trusted by Leading Financial Institutions Worldwide
      </p>

      <div className="relative w-full overflow-hidden h-6">
        <div className="absolute left-0 top-0 flex loop w-max gap-[70px]">
          {[...PartnersList, ...PartnersList].map((partner, index) => (
            <div
              key={index}
              className="relative w-[115px] h-6 shrink-0 select-none"
            >
              <Image
                src={`/assets/svg/partners/${partner}`}
                alt={`${partner} - ${index}`}
                fill
                sizes="auto"
                className="object-contain"
                quality={100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
