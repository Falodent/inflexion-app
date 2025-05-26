// component
import Card from "@/components/card";

// content
import { serviceList } from "@/content/services";

// types
import { Service } from "@/types/service";

const Services = () => {
  return (
    <section className="w-full pt-30 flex flex-col gap-[85px]">
      <div className="w-full px-8">
        <h1 className="w-full max-w-[1175px] font-[700] text-[48px] leading-[56px] -tracking-[0.03em] pr-2">
          <span className="text-fill">
            There are no other specialized vendors that understand the nuanced
            problems of expert networks and data providers from turning audio
            into high-margin transcript products like INFLXD.
          </span>
        </h1>
      </div>

      <div className="flex flex-col gap-[44px]">
        <h4 className="text-2xl leading-none -tracking-[0.03em] text-black-100 px-9">
          We understand the challenges of…
        </h4>

        <div className="w-full border-y border-grey-200 grid grid-cols-3">
          {serviceList.map((service: Service) => (
            <Card key={service.id} data={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
