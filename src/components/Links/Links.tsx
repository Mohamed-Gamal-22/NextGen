import logo from "../../assets/nextGenLogo.jpg";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function Links() {
  return (
    <div className="px-4 med:px-8 py-12">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <img
            src={logo}
            alt=""
            className="w-30 h-30 object-cover  border-2  border-[#0041C8] mb-2"
          />
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
            <li>
              <a target="_blank"
                className="flex items-center gap-2 text-[#434656]"
                href="https://www.linkedin.com/company/115848212"
              >
                <FaLinkedin className=" size-5" /> LinkedIn
              </a>
            </li>
            <li>
              <a target="_blank"
                className="flex items-center gap-2 text-[#434656]"
                href="https://www.instagram.com/nextgen___software?igsh=MWpzOXd3cHp6OTM2Mg%3D%3D"
              >
                <FaInstagram className=" size-5" /> Instagram
              </a>
            </li>
            <li>
              <a target="_blank"
                className="flex items-center gap-2 text-[#434656]"
                href="https://web.facebook.com/people/NextGen-Software-House/61588850784042/?mibextid=wwXIfr&rdid=GRS2ahlyJr3IXzs0&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1Gzc7L9que%2F%3Fmibextid%3DwwXIfr%26_rdc%3D1%26_rdr"
              >
                <FaFacebook className=" size-5" /> Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
