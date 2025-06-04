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
    <div className="max-w-[1040px] flex flex-col gap-14 ml-8 lg:ml-32">
      <div className="flex items-center gap-6">
        <div className="shrink-0">{data.icon}</div>

        <p className="max-w-[250px] lg:max-w-full font-[500] text-lg lg:text-[26px] leading-[24px] -tracking-[0.01em] text-black-100">
          {data.title}
        </p>
      </div>

      <p className="max-w-[315px] lg:max-w-full text-[28px] lg:text-[36px] font-[500] leading-[140%] text-black-100">
        {data.text}
      </p>
    </div>
  );
};

export default CoverageContent;
