// component
import { ScrollFillText } from "@/animated/text";
import Card from "@/components/card";
import Clients from "@/components/partners";

// content
import { serviceList } from "@/content/services";
import { useIsMobile } from "@/helpers/useIsMobile";

// types
import { Service } from "@/types/service";
import { useState } from "react";

const Services = () => {
  const isMobile = useIsMobile();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(
    isMobile ? 0 : null
  );

  return (
    <section className="w-full pt-30 flex flex-col gap-30 lg:gap-[220px]">
      <Clients />

      <div className="flex flex-col gap-[42px]">
        <ScrollFillText
          containerClassName="w-full px-4 lg:px-8 max-w-[360px] md:max-w-[830px]"
          className="font-[700] text-[40px] lg:text-[62px] leading-[47px] lg:leading-[60px] -tracking-[0.03em]"
        >
          <span>
            Few vendors understand the nuanced problems of expert networks and
            data providers end-to-end.
          </span>
        </ScrollFillText>

        <h4 className="max-w-[360px] text-xl leading-[26px] -tracking-[0.03em] text-black-100 px-4.5 lg:px-9">
          We specialize in the AI and human capabilities to solve them.
        </h4>
      </div>

      <div className="w-full border-y border-grey-200 grid grid-cols-1 lg:grid-cols-3 md:px-3 xl:px-9">
        {serviceList.map((service: Service, index) => (
          <div
            key={service.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Card
              key={service.id}
              data={service}
              isHovered={
                isMobile && hoveredIndex === null
                  ? index === 0
                  : hoveredIndex === index
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
