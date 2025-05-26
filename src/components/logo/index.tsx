import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="">
      <p className="font-[800] text-[40px] leading-none -tracking-[0.05em] text-center uppercase text-black-100 ">
        INFLXD
        <span className="text-blue-100 pl-[0.2px] text-[42px]">.</span>
      </p>
    </Link>
  );
};

export default Logo;
