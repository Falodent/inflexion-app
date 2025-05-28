import clsx from "clsx";

interface Props {
  className?: string;
}

const Title = ({ className }: Props) => {
  return (
    <div className="typewriter">
      <p
        className={clsx(
          "font-[750] text-center uppercase leading-none -tracking-[0.05em] text-black-100",
          "text-[64px] sm:text-[96px] md:text-[160px] lg:text-[280px] xl:text-[393px]",
          "transition-all ease-in-out duration-500",
          className
        )}
      >
        INFLXD
        <span className="text-blue-100">.</span>
      </p>
    </div>
  );
};

export default Title;
