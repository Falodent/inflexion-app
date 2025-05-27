import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="">
      <Image
        src="/assets/svg/logo.svg"
        alt="Inflxd"
        width={136}
        height={28}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
