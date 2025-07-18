import clsx from "clsx";

interface Props {
  tabs: string[];
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const CoverageTab = ({ tabs, active, setActive }: Props) => {
  return (
    <div className="w-full h-16 sm:h-22 px-8 sm:px-[30px] xx:px-14 xl:px-32 border-b border-[#D0D5DC] flex gap-16 overflow-x-auto scrollbar-none">
      {tabs?.map((item) => (
        <div
          role="button"
          className={clsx(
            "w-fit h-full flex items-center justify-center border-b-4 leading-[120%] text-lg sm:text-[26px] xx:text-lg xl:text-[26px] transition-all ease-in-out duration-500 whitespace-nowrap",
            active === item
              ? "xl:px-7 font-[700] text-black border-blue-100"
              : "text-black-100 font-[500] cursor-pointer border-transparent hover:border-blue-100"
          )}
          key={item}
          onClick={() => setActive(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default CoverageTab;
