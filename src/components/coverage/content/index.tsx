export interface CoverageData {
  icon: React.ReactNode;
  title: string;
  text: string;
}

interface Props {
  data: CoverageData;
}

const CoverageContent = ({ data }: Props) => {
  return (
    <div className="max-w-[1040px] flex flex-col gap-14 ml-8 xx:ml-14 xl:ml-32">
      <div className="flex items-center gap-2 xs:gap-6">
        <div className="shrink-0">{data.icon}</div>

        <p className="max-w-[250px] md:max-w-full font-[500] text-sm sm:text-lg md:text-xl xl:text-[26px] leading-[24px] -tracking-[0.01em] text-black-100">
          {data.title}
        </p>
      </div>

      <p className="max-w-[315px] md:max-w-full text-lg xs:text-[28px] lg:text-[32px] xl:text-[36px] font-[500] leading-[140%] text-black-100">
        {data.text}
      </p>
    </div>
  );
};

export default CoverageContent;
