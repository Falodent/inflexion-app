import { CarouselOne } from "@/content/carousel";

const Carousel = () => {
  return (
    <section className="w-full py-20 flex flex-col gap-7 bg-white">
      <div className="relative w-full overflow-hidden h-14">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-10 z-10 bg-gradient-to-r from-white to-transparent" />

        <div className="pointer-events-none absolute right-0 top-0 h-full w-10 z-10 bg-gradient-to-l from-white to-transparent" />

        <div className="absolute left-0 top-0 flex loop w-max gap-6">
          {[...CarouselOne, ...CarouselOne].map((item, index) => (
            <div
              key={index}
              className="relative w-fit px-[30px] h-[50px] border-[1.5px] border-[#030303] rounded-[136px] shrink-0 select-none flex items-center justify-center"
            >
              <p className="font-[500] text-base tracking-[0.02em] text-black-100 uppercase">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full overflow-hidden h-14">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-10 z-10 bg-gradient-to-r from-white to-transparent" />

        <div className="pointer-events-none absolute right-0 top-0 h-full w-10 z-10 bg-gradient-to-l from-white to-transparent" />

        <div className="absolute left-0 top-0 flex loop-reverse w-max gap-6">
          {[...CarouselOne, ...CarouselOne].map((item, index) => (
            <div
              key={index}
              className="relative w-fit px-[30px] h-[50px] border-[1.5px] border-[#030303] rounded-[136px] shrink-0 select-none flex items-center justify-center"
            >
              <p className="font-[500] text-base tracking-[0.02em] text-black-100 uppercase">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
