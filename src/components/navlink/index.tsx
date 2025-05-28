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
        "pb-2 font-[700] text-xl leading-[24px] align-middle uppercase text-black-300 underline-hover"
      )}
    >
      <div className="relative">
        {text}

        {text === "NEWSROOM" && (
          <span className="-bottom-[13px] left-1/2 transform -translate-x-1/2 absolute border-b-5 border-blue-100 inline-block w-[5px] text-center" />
        )}
      </div>
    </Link>
  );
};

export default Navlink;
