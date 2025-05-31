import clsx from "clsx";
import { useEffect, useState } from "react";

interface Props {
  className?: string;
}

const Title = ({ className }: Props) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (window.scrollY > 100) {
      setShouldAnimate(false);
    } else {
      setShouldAnimate(true);
    }
  }, []);

  return (
    <div className={clsx(shouldAnimate && "typewriter")}>
      <p
        className={clsx(
          "font-[750] text-center uppercase leading-none -tracking-[0.05em] text-black-100",
          "transition-all ease-in-out duration-500",
          className
        )}
      >
        INFLXD
        <span className="text-blue-100">.</span>
      </p>
    </div>
  );
};

export default Title;
