import clsx from "clsx";

interface Props {
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "large";
}

const Button = ({ children, variant = "primary", size = "large" }: Props) => {
  const VARIANT = {
    primary: "bg-blue-100 text-white outline-none hover:bg-black-100",
    secondary:
      "bg-transparent border border-grey-100 text-black hover:bg-blue-100 hover:text-white hover:border-blue-100",
  };

  const SIZE = {
    large: "h-[62px] py-[19px] pl-[23px] pr-[21px] font-[500]",
  };

  return (
    <button
      className={clsx(
        "rounded-lg cursor-pointer flex items-center justify-center gap-12 transition-all ease-in-out duration-500",
        VARIANT[variant],
        SIZE[size]
      )}
    >
      {children}
    </button>
  );
};

export default Button;
