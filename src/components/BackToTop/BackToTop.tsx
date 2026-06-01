import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-20 group right-8 size-10 cursor-pointer bg-linear-to-r from-[#0041C8] to-[#00737B] rounded-full flex items-center justify-center ${show ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
    >
      <FaArrowUp className="text-white size-4" />
    </div>
  );
}
