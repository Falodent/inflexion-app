// component
import Card from "@/components/card";
import Clients from "@/components/partners";

// content
import { serviceList } from "@/content/services";

// types
import { Service } from "@/types/service";

const Services = () => {
  return (
    <section className="w-full pt-30 flex flex-col gap-30 lg:gap-[220px]">
      <Clients />

      <div className="flex flex-col gap-[42px]">
        <div className="w-full px-4 lg:px-8">
          <h1 className="w-full max-w-[330px] lg:max-w-[810px] font-[700] text-[40px] lg:text-[62px] leading-[47px] lg:leading-[60px] -tracking-[0.03em] pr-2">
            <span className="text-fill">
              Few vendors understand the nuanced problems of expert networks and
              data providers end-to-end.
            </span>
          </h1>
        </div>

        <h4 className="max-w-[360px] text-xl leading-[26px] -tracking-[0.03em] text-black-100 px-4.5 lg:px-9">
          We specialize in the AI and human capabilities to solve them.
        </h4>
      </div>

      <div className="w-full border-y border-grey-200 grid grid-cols-1 lg:grid-cols-3 lg:px-9">
        {serviceList.map((service: Service) => (
          <Card key={service.id} data={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
