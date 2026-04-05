import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

const SectionWrapper = ({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section
      ref={ref}
      id={id}
      className={`py-20 md:py-28 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
