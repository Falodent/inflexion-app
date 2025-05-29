import clsx from "clsx";

interface Props {
  ref?: React.Ref<HTMLButtonElement>;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "scroller";
  size?: "large" | "scroller";
  className?: string;
}

const Button = ({
  ref,
  children,
  variant = "primary",
  size = "large",
  className,
}: Props) => {
  const VARIANT = {
    primary:
      "bg-blue-100 text-white outline-none border hover:bg-transparent hover:border-grey-100 hover:text-black",
    secondary:
      "bg-transparent border border-grey-100 text-black hover:bg-blue-100 hover:text-white hover:border-blue-100",
    scroller: "shrink-0 bg-black text-white outline-none !rounded-[40px] !cursor-default",
  };

  const SIZE = {
    large: "h-[62px] py-[19px] pl-[23px] pr-[21px] font-[500]",
    scroller:
      "h-10 px-6 font-jetbrains text-[15px] leading-none tracking-[0.01em] uppercase",
  };

  return (
    <button
      ref={ref}
      className={clsx(
        "rounded-lg cursor-pointer flex items-center justify-center gap-12 transition-all ease-in-out duration-500",
        VARIANT[variant],
        SIZE[size],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
