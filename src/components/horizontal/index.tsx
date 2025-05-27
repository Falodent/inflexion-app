import { useEffect, useRef } from "react";

const HorizontalScrollOnVertical = () => {
  const horizontalContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const horizontalContainer = horizontalContainerRef.current;
    const content = contentRef.current;

    if (!horizontalContainer || !content) return;

    const handleVerticalScroll = (e: Event) => {
      if (isScrolling.current) return;

      isScrolling.current = true;

      // Calculate scroll percentage
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = window.scrollY / scrollHeight;

      // Calculate horizontal scroll position
      const maxHorizontalScroll =
        content.scrollWidth - horizontalContainer.clientWidth;
      const horizontalPosition = scrollPercent * maxHorizontalScroll;

      // Apply horizontal scroll
      horizontalContainer.scrollTo({
        left: horizontalPosition,
        behavior: "smooth",
      });

      // Prevent default vertical scroll if content is wider than container
      if (maxHorizontalScroll > 0) {
        e.preventDefault();
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 100);
    };

    window.addEventListener("scroll", handleVerticalScroll, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleVerticalScroll);
    };
  }, []);

  return (
    <div
      ref={horizontalContainerRef}
      style={{
        width: "100vw",
        height: "100vh",
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        scrollSnapType: "x mandatory",
        scrollBehavior: "smooth",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <div
        ref={contentRef}
        style={{
          display: "inline-block",
          height: "100vh",
        }}
      >
        {/* Your horizontally scrollable content sections */}
        <section
          style={{
            display: "inline-block",
            width: "100vw",
            height: "100vh",
            scrollSnapAlign: "start",
            backgroundColor: "#f0f0f0",
          }}
        >
          <h1>Section 1</h1>
        </section>

        <section
          style={{
            display: "inline-block",
            width: "100vw",
            height: "100vh",
            scrollSnapAlign: "start",
            backgroundColor: "#e0e0e0",
          }}
        >
          <h1>Section 2</h1>
        </section>

        <section
          style={{
            display: "inline-block",
            width: "100vw",
            height: "100vh",
            scrollSnapAlign: "start",
            backgroundColor: "#d0d0d0",
          }}
        >
          <h1>Section 3</h1>
        </section>
      </div>
    </div>
  );
};

export default HorizontalScrollOnVertical;
