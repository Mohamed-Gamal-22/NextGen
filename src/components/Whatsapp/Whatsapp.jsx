import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

export default function Whatsapp() {
  return (
    <>
      <a
        href="https://wa.me/201101446036?text=مرحبا، أريد الاستفسار عن الخدمة"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="fixed bottom-8 group right-8 size-10 cursor-pointer bg-[#25D366] rounded-full flex items-center justify-center">
          <FaWhatsapp className="text-white size-6" />
          <div className="absolute bg-white -left-42.5 rounded-xl py-1 border-3 border-[#25D366] px-2 font-semibold opacity-0 group-hover:opacity-100 duration-300">
            Message Us Now...
          </div>
        </div>
      </a>
    </>
  );
}
