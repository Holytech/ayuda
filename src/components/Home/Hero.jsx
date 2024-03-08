import { Link } from "react-router-dom";
import Navbar from "../../Layouts/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="w-full md:bg-hero bg-no-repeat bg-cover bg-[#00A09A] md:bg-white">
        <Navbar />
        <div className="w-full md:w-10/12 mx-auto px-5 md:px-0 flex flex-col md:flex-row mt-10 items-center justify-between">
          <div
            className="w-full md:w-2/5 flex flex-col text-white gap-10"
            data-aos="fade-right"
          >
            <div className="w-full flex flex-col gap-4 font-sora text-4xl md:text-6xl font-semibold">
              <p>Improve</p>
              <p>customer</p>
              <p>service today</p>
            </div>
            <p className="font-tt-norms">
              Simple , User-Friendly Ticket Management Solution developed for
              collaboration and effective Service Delivery.
            </p>
            <div className="w-full flex justify-between items-center">
              <button className="bg-[#FF7465] w-fit px-5 py-2 rounded-3xl">
                Book a Demo
              </button>
              <Link to="#">Watch the video</Link>
            </div>
          </div>
          <img
            src="/ayud02.png"
            alt="ayud02"
            className="mt-10 md:mt-0 mb-14"
            data-aos="fade-left"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
