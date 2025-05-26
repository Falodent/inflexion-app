import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

const Navlink = ({ href, text }: Props) => {
  return (
    <Link
      href={href}
      className="font-[700] text-xl leading-[24px] align-middle uppercase text-black-300 underline-hover"
    >
      {text}
    </Link>
  );
};

export default Navlink;
