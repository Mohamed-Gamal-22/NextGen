import { MdMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { ImSpinner9 } from "react-icons/im";

import toast from "react-hot-toast";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setisLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setisLoading(true);

    emailjs
      .sendForm(
        "service_hef36u5", // ID الخدمة من EmailJS
        "template_vo5p1yc", // ID التمبلت اللي عملته
        form.current,
        "c2Hf8DBdvUcQnNc5d", // الـ Public Key بتاعك من EmailJS
      )
      .then((result) => {
        console.log("Message sent:", result.text);
        toast.success("تم إرسال الرسالة بنجاح");
        setisLoading(false);
        form.current.reset(); // إعادة تعيين الحقول بعد الإرسال
      })
      .catch((error) => {
        console.log("Error:", error.text);
        toast.error("حصل خطأ في الإرسال");
        setisLoading(false);
      });
  };

  return (
    <div className="px-4 med:px-8 py-12 bg-[#E7E8EA]">
      <div className="flex flex-wrap gap-8 lg:gap-0">
        {/* الجزء الشمال */}
        <div className="left w-full lg:w-1/2 px-4">
          <h2 className="text-[40px] lg:text-[48px] font-bold tracking-wide leading-16 text-[#191C1E] capitalize">
            Let’s work together to build
            <span className="text-[#0041C8]"> the future.</span>
          </h2>
          <p className="text-[#434656] my-6">
            Whether you're scaling a startup or modernizing an enterprise, our
            team of architects is ready to deliver.
          </p>
          {/* Email */}
          <div className="flex gap-4 items-center">
            <div className="size-12 bg-[#0041C81A] rounded-xl flex justify-center items-center border">
              <MdMailOutline className="text-[20px] text-[#0041C8]" />
            </div>
            <div>
              <p className="font-bold text-[#191C1E]">Email Us</p>
              <a href="mailto:nextgensoftware.team@gmail.com?subject=مرحبا، أريد الاستفسار عن الخدمة">
                <span className="text-[#434656] animate-pulse">
                  nextgensoftware.team@gmail.com
                </span>
              </a>
            </div>
          </div>
          {/* WhatsApp */}
          <div className="flex gap-4 items-center mt-8">
            <div className="size-12 bg-[#0041C81A] rounded-xl flex justify-center items-center border">
              <FaWhatsapp className="text-[20px] text-[#0041C8]" />
            </div>
            <div>
              <p className="font-bold text-[#191C1E]">
                Chat With Us (WhatsApp)
              </p>
              <a
                href="https://wa.me/201101446036?text=مرحبا، أريد الاستفسار عن الخدمة"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[#434656] animate-pulse">
                  201101446036
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* الجزء اليمين - الفورم */}
        <div className="right w-full lg:w-1/2 px-4">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-3 bg-white p-10 rounded-[20px] shadow-lg"
          >
            <div className="flex flex-col gap-2 ">
              <label htmlFor="Name">Name:</label>
              <input
                type="text"
                placeholder="Mohamed Ali..."
                className="border px-2 py-3 rounded"
                name="name"
                required
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="Email">Email:</label>
              <input
                type="email"
                placeholder="Mohamed@gmail.com"
                className="border px-2 py-3 rounded"
                name="email"
                required
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="Message">Message:</label>
              <textarea
                placeholder="Tell Us About Your Project"
                className="border px-2 py-3 rounded resize-none"
                rows={5}
                name="message"
                required
              ></textarea>
            </div>
            <button
              disabled={isLoading}
              type="submit"
              className="w-full h-12.5 bg-linear-to-r from-[#0041C8] to-[#00737B] text-white cursor-pointer mt-4 rounded-sm flex justify-center items-center gap-2"
            >
              {isLoading ? (
                <ImSpinner9 className="animate-spin" />
              ) : (
                <>
                  Send Message <IoMdSend />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
