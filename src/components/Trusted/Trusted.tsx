import skynews from "../../assets/skynews.jpg";
import apple from "../../assets/apple.png";
import amazon from "../../assets/amazon.jpg";
import huawei from "../../assets/huawei.png";
import microsoft from "../../assets/microsoft.jpg";

export default function Trusted() {
  return (
    <div className=" bg-[#F2F4F6] my-12">
      <div className="px-4 med:px-12 py-12 text-center leading-6">
        <h2 className="uppercase text-[#434656] font-semibold tracking-[5px]">
          TRUSTED <span className="text-[#0041C8]">BY</span> LEADING COMPANIES
        </h2>

        <div className="flex flex-wrap justify-center my-4">
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col items-center p-4">
            <img
              src={skynews}
              alt="skynews"
              loading="lazy"
              className="w-30 h-[120px] object-cover"
            />
            <p className=" my-3 font-bold">Sky News Arabia</p>
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col items-center p-4">
            <img
              src={apple}
              alt="apple"
              loading="lazy"
              className="w-30 h-[120px] object-cover"
            />
            <p className=" my-3 font-bold">Sky News Arabia</p>
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col items-center p-4">
            <img
              src={amazon}
              alt="amazon"
              loading="lazy"
              className="w-30 h-[120px] object-cover"
            />
            <p className=" my-3 font-bold">Sky News Arabia</p>
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col items-center p-4">
            <img
              src={huawei}
              alt="huawei"
              loading="lazy"
              className="w-30 h-[120px] object-cover"
            />
            <p className=" my-3 font-bold">Sky News Arabia</p>
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col items-center p-4">
            <img
              src={microsoft}
              alt="microsoft"
              loading="lazy"
              className="w-30 h-[120px] object-cover"
            />
            <p className=" my-3 font-bold">Sky News Arabia</p>
          </div>
        </div>
      </div>
    </div>
  );
}
