import PageEntrance from "@/components/entrance";
import FaqQuestion from "@/components/faq/question";
import { FaqData } from "@/content/faq";

const FAQ = () => {
  return (
    <PageEntrance className="w-full py-32 flex flex-col gap-14 lg:gap-20 bg-white">
      <p className="max-w-[305px] lg:max-w-full font-[800] text-[48px] leading-[59px] lg:text-[62px] lg:leading-[80px] -tracking-[0.04em] uppercase text-black-100 px-4 lg:px-8">
        Frequently Asked Questions
      </p>

      <div className="w-full flex flex-col">
        {FaqData.map((item, index) => (
          <FaqQuestion key={index} index={index} q={item.q} a={item.a} />
        ))}
      </div>
    </PageEntrance>
  );
};

export default FAQ;
