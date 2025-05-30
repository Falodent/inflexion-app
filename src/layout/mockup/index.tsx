import Image from "next/image";

const Mock = () => {
  return (
    <section className="w-full h-screen relative">
      <Image
        src="/assets/jpg/mockup.jpeg"
        alt="Mockup"
        fill
        className="w-full h-[80vh] object-cover"
      />
    </section>
  );
};

export default Mock;
