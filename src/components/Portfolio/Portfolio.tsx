import img from "../../assets/buisniss.webp";

import { FaArrowRightLong } from "react-icons/fa6";
import { IoArrowRedo } from "react-icons/io5";

export default function Portfolio() {
  return (
    <div className="px-4 med:px-8 text-center py-8">
      <h2 className="text-[36px] font-semibold text-[#191C1E]">
        Our Portfolio
      </h2>
      <p className="leading-7 text-[18px] text-[#434656] mt-4">
        Discover how we help global enterprises navigate complexity through
        intelligent software engineering.
      </p>
      <div className="flex  items-center justify-end my-8 gap-2 text-[#0041C8] cursor-pointer hover:underline">
        Explore All Projects <FaArrowRightLong />
      </div>

      <div className="parent flex flex-wrap justify-between">
        <div className="card w-full sm-full md:w-1/2 lg:w-1/3 p-4">
          <div className="overflow-hidden rounded-2xl border shadow-xl">
            <img src={img} alt="" className="w-full" />
            <div className="my-4 px-4 text-left">
              <div className="techs flex gap-2 flex-wrap ">
                <div className="py-1 px-2 bg-[#EDEEF0] border shadow">
                  Security
                </div>
                <div className="py-1 px-2 bg-[#EDEEF0] border shadow">
                  Cloud
                </div>
              </div>
              <h3 className="text-[24px] leading-8  my-4 font-semibold text-[#191C1E]">
                Lumina Trading Engine
              </h3>
              <p className="text-[#434656]">
                Next-gen cybersecurity suite utilizing machine learning for
                predictive threat detection across hybrid clouds.
              </p>
              <div className="flex  items-center mt-4 gap-2 text-[#0041C8] cursor-pointer hover:underline">
                View Case Study <IoArrowRedo />
              </div>
            </div>
          </div>
        </div>
        <div className="card w-full sm-full md:w-1/2 lg:w-1/3 p-4">
          <div className="overflow-hidden rounded-2xl border shadow-xl">
            <img src={img} alt="" className="w-full" />
            <div className="my-4 px-4 text-left">
              <div className="techs flex gap-2 flex-wrap ">
                <div className="py-1 px-2 bg-[#EDEEF0] border shadow">
                  Security
                </div>
                <div className="py-1 px-2 bg-[#EDEEF0] border shadow">
                  Cloud
                </div>
              </div>
              <h3 className="text-[24px] leading-8  my-4 font-semibold text-[#191C1E]">
                Lumina Trading Engine
              </h3>
              <p className="text-[#434656]">
                Next-gen cybersecurity suite utilizing machine learning for
                predictive threat detection across hybrid clouds.
              </p>
              <div className="flex  items-center mt-4 gap-2 text-[#0041C8] cursor-pointer hover:underline">
                View Case Study <IoArrowRedo />
              </div>
            </div>
          </div>
        </div>
        <div className="card w-full sm-full md:w-1/2 lg:w-1/3 p-4">
          <div className="overflow-hidden rounded-2xl border shadow-xl">
            <img src={img} alt="" className="w-full" />
            <div className="my-4 px-4 text-left">
              <div className="techs flex gap-2 flex-wrap ">
                <div className="py-1 px-2 bg-[#EDEEF0] border shadow">
                  Security
                </div>
                <div className="py-1 px-2 bg-[#EDEEF0] border shadow">
                  Cloud
                </div>
              </div>
              <h3 className="text-[24px] leading-8  my-4 font-semibold text-[#191C1E]">
                Lumina Trading Engine
              </h3>
              <p className="text-[#434656]">
                Next-gen cybersecurity suite utilizing machine learning for
                predictive threat detection across hybrid clouds.
              </p>
              <div className="flex  items-center mt-4 gap-2 text-[#0041C8] cursor-pointer hover:underline">
                View Case Study <IoArrowRedo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
