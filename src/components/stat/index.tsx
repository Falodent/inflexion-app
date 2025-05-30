interface Props {
  title: string;
  figure: string;
  color?: string;
  subcolor?: string;
}

const Stat = ({
  title,
  figure,
  color = "text-black",
  subcolor = "text-black/70",
}: Props) => {
  return (
    <div className="w-full max-w-[350px] flex flex-col gap-7 ">
      <h3
        className={`font-[500] text-[80px] leading-none -tracking-[0.03em] ${color}`}
      >
        {figure}
      </h3>

      <h4 className={`font-[500] text-xl leading-[28px] ${subcolor}`}>
        {title}
      </h4>
    </div>
  );
};

export default Stat;
