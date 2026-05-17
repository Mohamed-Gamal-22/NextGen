import { useState } from "react";
import logo from "../../assets/nextGenLogo.jpg";
import { MdLanguage } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-8 relative">
      <div className="p-2 flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <img
            className="w-48 h-20 object-cover"
            src={logo}
            alt="nextGen"
            loading="lazy"
          />
        </div>

        {/* Desktop Links */}
        <div className="Links hidden med:flex">
          <ul className="flex gap-8 p-0">
            <li>
              <a className="text-[#434656]" href="">
                Solutions
              </a>
            </li>

            <li>
              <a className="text-[#434656]" href="">
                Portfolio
              </a>
            </li>

            <li>
              <a className="text-[#434656]" href="">
                Services
              </a>
            </li>

            <li>
              <a className="text-[#434656]" href="">
                Lab
              </a>
            </li>

            <li>
              <a className="text-[#434656]" href="">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop Button */}
        <div className="get-start hidden med:flex gap-3 items-center">
          <MdLanguage className="size-5 text-[#434656]" />

          <button className="py-2.5 px-6 rounded-[12px] bg-linear-to-r from-[#0041C8] to-[#00737B] text-white cursor-pointer">
            Get Start
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="med:hidden z-50">
          <FaBarsStaggered className="size-5 cursor-pointer text-[#434656]" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`med:hidden absolute left-0 top-full w-full px-4 transition-all duration-300 ease-in-out z-40 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-gray-100/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <ul className="flex flex-col gap-5">
            <li>
              <a className="text-[#434656]" href="">
                Solutions
              </a>
            </li>

            <li>
              <a className="text-[#434656]" href="">
                Portfolio
              </a>
            </li>

            <li>
              <a className="text-[#434656]" href="">
                Services
              </a>
            </li>

            <li>
              <a className="text-[#434656]" href="">
                Lab
              </a>
            </li>

            <li>
              <a className="text-[#434656]" href="">
                About
              </a>
            </li>
          </ul>

          <div className="flex gap-3 items-center mt-6">
            <MdLanguage className="size-5 text-[#434656]" />

            <button className="py-2.5 px-6 rounded-[12px] bg-linear-to-r from-[#0041C8] to-[#00737B] text-white cursor-pointer">
              Get Start
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
