import clsx from "clsx";
import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

const Navlink = ({ href, text }: Props) => {
  return (
    <Link
      href={href}
      className={clsx(
        "pb-2 font-[700] text-xl leading-[24px] align-middle uppercase text-black-300 underline-hover",
        text === "NEWSROOM" && "border-b-5 border-blue-100"
      )}
    >
      {text}
    </Link>
  );
};

export default Navlink;
