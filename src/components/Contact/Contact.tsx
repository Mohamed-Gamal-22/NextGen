import { MdMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

export default function Contact() {
  return (
    <div className="px-4 med:px-8 py-16 bg-[#E7E8EA]">
      <div className="flex flex-wrap gap-8 lg:gap-0">
        <div className="left w-full lg:w-1/2 px-4">
          <h2 className="text-[40px] lg:text-[48px] leading-16 text-[#191C1E] capitalize">
            Let’s work together to build
            <span className="text-[#0041C8]">the future.</span>
          </h2>
          <p className="text-[#434656] my-6">
            Whether you're scaling a startup or modernizing an enterprise, our
            team of architects is ready to deliver.
          </p>
          <div className="flex gap-4 items-center">
            <div className="size-12 bg-[#0041C81A] rounded-xl flex justify-center items-center border">
              <MdMailOutline className="text-[20px] text-[#0041C8]" />
            </div>
            <div>
              <p className="font-bold text-[#191C1E]">Email Us</p>
              <span className="text-[#434656]">hello@techforge.io</span>
            </div>
          </div>
          <div className="flex gap-4 items-center mt-8">
            <div className="size-12 bg-[#0041C81A] rounded-xl flex justify-center items-center border">
              <FaWhatsapp className="text-[20px] text-[#0041C8]" />
            </div>
            <div>
              <p className="font-bold text-[#191C1E]">
                Chat With Us (WhatsApp)
              </p>
              <span className="text-[#434656]">01125486598</span>
            </div>
          </div>
        </div>
        <div className="right w-full lg:w-1/2 px-4">
          <form className="flex flex-col gap-3 bg-white p-10 rounded-[20px] shadow-lg   ">
            <div className="flex flex-col gap-2 ">
              <label htmlFor="Name">Name:</label>
              <input
                type="text"
                placeholder="Mohamed Ali..."
                className="border px-2 py-3 rounded"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="Name">Email:</label>
              <input
                type="text"
                placeholder="Mohamed@gmail.com"
                className="border px-2 py-3 rounded"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="Name">Message:</label>
              <textarea
                placeholder="Tell Us About Your Project"
                className="border px-2 py-3 rounded resize-none"
                rows={5}
              ></textarea>
            </div>
            <button className=" w-full bg-linear-to-r from-[#0041C8] to-[#00737B] text-white cursor-pointer mt-4 rounded-sm flex justify-center items-center py-4 gap-2">
              Send Message <IoMdSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
