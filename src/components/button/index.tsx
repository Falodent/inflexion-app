import clsx from "clsx";

interface Props {
  ref?: React.Ref<HTMLButtonElement>;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "scroller";
  size?: "large" | "scroller" | "nav";
  className?: string;
  handleClick?: () => void;
  type?: "button" | "submit";
}

const Button = ({
  ref,
  children,
  variant = "primary",
  size = "large",
  className,
  handleClick,
  type = "button",
}: Props) => {
  const VARIANT = {
    primary:
      "bg-blue-100 text-white outline-none border-2 border-transparent hover:bg-transparent hover:border-blue-100 hover:text-blue-100 hover:font-[700] hover:scale-105",
    secondary:
      "bg-transparent border border-grey-100 text-black hover:font-[700] hover:border-black-100 hover:border-2 hover:scale-105",
    scroller:
      "shrink-0 bg-black text-white outline-none !rounded-[40px] !cursor-default",
  };

  const SIZE = {
    large: "h-[62px] py-[19px] pl-[23px] pr-[21px] font-[500]",
    nav: "h-[56px] px-[21.5px] !gap-8 font-[700]",
    scroller:
      "h-10 px-6 font-jetbrains text-[15px] leading-none tracking-[0.01em] uppercase",
  };

  return (
    <button
      ref={ref}
      type={type}
      className={clsx(
        "rounded-lg cursor-pointer flex items-center justify-center gap-12 transition-all ease-in-out duration-500 whitespace-nowrap",
        VARIANT[variant],
        SIZE[size],
        className
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
