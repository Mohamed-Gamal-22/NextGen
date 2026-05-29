import Slider from "react-slick";
import img1 from "../../assets/ai.webp";
import img2 from "../../assets/buisniss.webp";
import img3 from "../../assets/dataanalisys.webp";
import img4 from "../../assets/first.webp";
import img5 from "../../assets/mobile.webp";
import img6 from "../../assets/ui.webp";
import img7 from "../../assets/web.webp";

const SlickSlider = (Slider as any).default || Slider;

export default function MainSlider() {
  const settings = {
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="overflow-hidden">
      <div className="slider-container">
        <SlickSlider {...settings}>
          <div className="relative rounded-xl overflow-hidden">
            <img className="w-full rounded-xl" src={img4} alt="digital apps" />
            <div className="layer rounded-xl absolute inset-0 bg-black/65 flex justify-center items-center">
              <p
                className="text-center text-white font-bold leading-tight px-6 mx-auto max-w-4xl
                            text-xl sm:text-2xl md:text-4xl lg:text-4xl
                            drop-shadow-[0_0_15px_rgba(168,85,247,0.9)]
                            transition-all duration-300
                            hover:scale-105 hover:drop-shadow-[0_0_25px_rgba(236,72,153,1)]
                            wrap-break-word"
              >
                Building the Future of Digital Experiences
              </p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img className="w-full" loading="lazy" src={img1} alt="ai" />
            <div className="layer rounded-xl absolute inset-0 bg-black/65 flex justify-center items-center">
              <p
                className="text-center text-white font-bold leading-tight px-6 mx-auto max-w-4xl
                            text-xl sm:text-2xl md:text-4xl lg:text-4xl
                            drop-shadow-[0_0_15px_rgba(168,85,247,0.9)]
                            transition-all duration-300
                            hover:scale-105 hover:drop-shadow-[0_0_25px_rgba(236,72,153,1)]
                            wrap-break-word"
              >
                Empowering Innovation Through Artificial Intelligence
              </p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img className="w-full rounded-xl" src={img2} alt="businiss app" />
            <div className="layer rounded-xl absolute inset-0 bg-black/65 flex justify-center items-center">
              <p
                className="text-center text-white font-bold leading-tight px-6 mx-auto max-w-4xl
                            text-xl sm:text-2xl md:text-4xl lg:text-4xl
                            drop-shadow-[0_0_15px_rgba(168,85,247,0.9)]
                            transition-all duration-300
                            hover:scale-105 hover:drop-shadow-[0_0_25px_rgba(236,72,153,1)]
                            wrap-break-word"
              >
                Smart Solutions for Smarter Businesses
              </p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img
              className="w-full rounded-xl"
              src={img3}
              alt="dataanalisys company"
            />
            <div className="layer rounded-xl absolute inset-0 bg-black/65 flex justify-center items-center">
              <p
                className="text-center text-white font-bold leading-tight px-6 mx-auto max-w-4xl
                            text-xl sm:text-2xl md:text-4xl lg:text-4xl
                            drop-shadow-[0_0_15px_rgba(168,85,247,0.9)]
                            transition-all duration-300
                            hover:scale-105 hover:drop-shadow-[0_0_25px_rgba(236,72,153,1)]
                            wrap-break-word"
              >
                Transforming Data Into Actionable Insights
              </p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img className="w-full rounded-xl" src={img5} alt="mobile app" />
            <div className="layer rounded-xl absolute inset-0 bg-black/65 flex justify-center items-center">
              <p
                className="text-center text-white font-bold leading-tight px-6 mx-auto max-w-4xl
                            text-xl sm:text-2xl md:text-4xl lg:text-4xl
                            drop-shadow-[0_0_15px_rgba(168,85,247,0.9)]
                            transition-all duration-300
                            hover:scale-105 hover:drop-shadow-[0_0_25px_rgba(236,72,153,1)]
                            wrap-break-word"
              >
                Innovative Mobile Apps for Every Lifestyle
              </p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img className="w-full" loading="lazy" src={img6} alt="ui/ux" />
            <div className="layer rounded-xl absolute inset-0 bg-black/65 flex justify-center items-center">
              <p
                className="text-center text-white font-bold leading-tight px-6 mx-auto max-w-4xl
                            text-xl sm:text-2xl md:text-4xl lg:text-4xl
                            drop-shadow-[0_0_15px_rgba(168,85,247,0.9)]
                            transition-all duration-300
                            hover:scale-105 hover:drop-shadow-[0_0_25px_rgba(236,72,153,1)]
                            wrap-break-word"
              >
                Designing Interfaces, Elevating Experiences
              </p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img className="w-full" loading="lazy" src={img7} alt="web" />
            <div className="layer rounded-xl absolute inset-0 bg-black/65 flex justify-center items-center">
              <p
                className="text-center text-white font-bold leading-tight px-6 mx-auto max-w-4xl
                            text-xl sm:text-2xl md:text-4xl lg:text-4xl
                            drop-shadow-[0_0_15px_rgba(168,85,247,0.9)]
                            transition-all duration-300
                            hover:scale-105 hover:drop-shadow-[0_0_25px_rgba(236,72,153,1)]
                            wrap-break-word"
              >
                Crafting Modern Websites with Performance and Style
              </p>
            </div>
          </div>
        </SlickSlider>
      </div>
    </div>
  );
}
