import GetStartedButton from "../GetStartedButton/GetStartedButton";
import MainSlider from "../Slider/Slider";

export default function Hero() {
  return (
    <>
      <div className="px-4 med:px-8">
        <div className="flex w-full flex-wrap items-center justify-between">
          <div className="building w-full lg:w-1/2 px-4">
            <ul className="list-disc list-inside mt-4">
              <li className="font-bold text-[11px] sm:text-[12px] max-w-fit border border-[#C3C5D9] text-[#0041C8] py-1 px-3 rounded-[12px] bg-[#0041C8]/10">
                NEXT-GEN INNOVATION
              </li>
            </ul>

            <h1 className="font-bold text-[38px] sm:text-[44px] md:text-[50px] lg:text-[64px] text-[#191C1E] mt-6 lg:mt-8 leading-[120%] tracking-[-1px] lg:tracking-[-1.28px]">
              Building <span className="text-[#0041C8]">Next-Generation</span>{" "}
              Digital Solutions
            </h1>

            <p className="leading-7 text-[15px] sm:text-[16px] text-[#434656] mt-5 lg:mt-8 max-w-[95%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, officiis. Nam impedit repellat consequatur, ipsa
              aliquam nostrum nesciunt nobis facere. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Vitae, sequi.
            </p> 

            <div className="btns mt-6 text-[12px] med:text-[16px] lg:mt-8 flex justify-center sm:justify-start gap-4 ">
              <GetStartedButton />

              <button className="py-2.5 px-6 rounded-[12px]  cursor-pointer border border-[#737688]">
                View Our Work
              </button>
            </div>
          </div>

          <div className="slide w-full lg:w-1/2 py-4 mt-6 lg:mt-0">
            <div className=" rounded-xl p-0 overflow-hidden bg-white shadow-[0_0_40px_rgba(0,0,0,0.12)]">
              <MainSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
