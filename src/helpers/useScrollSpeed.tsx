import { useEffect, useRef, useState } from "react";

function useScrollSpeed() {
  const lastScrollY = useRef<number>(0);
  const lastTime = useRef<number>(Date.now());
  const [speed, setSpeed] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();

      const deltaY = Math.abs(currentScrollY - lastScrollY.current);
      const deltaTime = currentTime - lastTime.current;

      // pixels per second
      const scrollSpeed = deltaTime > 0 ? (deltaY / deltaTime) * 1000 : 0;

      setSpeed(scrollSpeed);

      lastScrollY.current = currentScrollY;
      lastTime.current = currentTime;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return speed;
}

export default useScrollSpeed;
