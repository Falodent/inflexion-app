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
        "pb-2 font-[700] text-base leading-[24px] align-middle uppercase underline-hover",
        text === "NEWSROOM" ? "text-blue-100" : "text-black-300"
      )}
    >
      <div className="relative">{text}</div>
    </Link>
  );
};

export default Navlink;
