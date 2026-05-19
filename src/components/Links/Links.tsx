import logo from "../../assets/nextGenLogo.jpg";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function Links() {
  return (
    <div className="px-4 med:px-8 py-16">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <img src={logo} alt="" className="w-30 h-30 object-cover" />
          <p className="text-[#434656]">
            Engineering excellence for the world's most ambitious technology
            innovators.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <ul className="flex flex-col gap-4 text-[14px]">
            <li className="font-bold text-[#191C1E]">Resources</li>
            <li className="text-[#434656]">Portfolio</li>
            <li className="text-[#434656]">Services</li>
            <li className="text-[#434656]">Contact</li>
          </ul>
        </div>
        <div className="w-1/2 md:w-1/2 lg:w-1/4 p-4">
          <ul className="flex flex-col gap-4 text-[14px]">
            <li className="font-bold text-[#191C1E]">Company</li>
            <li className="text-[#434656]">About</li>
            <li className="text-[#434656]">Career</li>
          </ul>
        </div>
        <div className="w-1/2 md:w-1/2 lg:w-1/4 p-4">
          <ul className="flex flex-col gap-4 text-[14px]">
            <li className="flex items-center gap-2 font-bold text-[#191C1E] ">
              Connection
            </li>
            <li className="flex items-center gap-2 text-[#434656] ">
              <FaLinkedin className=" size-5" /> LinkedIn
            </li>
            <li className="flex items-center gap-2 text-[#434656]">
              <FaFacebook className=" size-5" /> Facebook
            </li>
            <li className="flex items-center gap-2 text-[#434656]">
              <FaInstagram className=" size-5" /> Instagram
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
