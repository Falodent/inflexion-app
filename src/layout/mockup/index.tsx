import Image from "next/image";

const Mock = () => {
  return (
    <section className="w-full h-screen relative">
      <Image
        src="/assets/jpg/mockup.jpeg"
        alt="Mockup"
        fill
        className="w-full h-[80vh] object-cover hidden lg:block"
      />

      <Image
        src="/assets/png/mockup-mobile.png"
        alt="Mockup"
        fill
        className="px-20 w-full h-[80vh] object-contain lg:hidden"
      />
    </section>
  );
};

export default Mock;
