import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div
        className="w-full bg-[#00A09A] md:bg-white md:bg-footer md:bg-left md:bg-no-repeat"
        data-aos="fade-right"
      >
        <div className="w-full md:w-10/12 flex flex-col md:flex-row mx-auto px-10 md:px-0 py-10">
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <div className="w-full flex flex-row justify-between">
              <div className="w-fit md:w-1/2 flex flex-col gap-4 text-white">
                <p className="font-bold text-xl">Features</p>
                <Link to="#">Features</Link>
                <Link to="#">API</Link>
                <Link to="#">Integration</Link>
                <Link to="#">Pricing</Link>
              </div>
              <div className="w-fit md:w-1/2 flex flex-col gap-4 text-white">
                <p className="font-bold text-xl">Resources</p>
                <Link to="#">Developer</Link>
                <Link to="#">Status</Link>
                <Link to="#">Security</Link>
              </div>
            </div>
            <div className="w-full flex flex-row justify-between mt-10">
              <div className="w-fit md:w-1/2 flex flex-col gap-4 text-white">
                <p className="font-bold text-xl">Company</p>
                <Link to="#">About</Link>
                <Link to="#">Contact</Link>
              </div>
              <div className="w-fit md:w-1/2 flex flex-col gap-4 text-white">
                <p className="font-bold text-xl">Resources</p>
                <Link to="#">Developer</Link>
                <Link to="#">Status</Link>
                <Link to="#">Security</Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2" data-aos="fade-left">
            <div className="w-full md:w-9/12">
              <hr className="h-px my-10 bg-[#D4D5D9] border-0"></hr>
              <div className="ml-10 md:ml-20">
                <p className="font-sora font-semibold">Get in touch</p>
                <p className="font-sora font-semibold text-2xl mt-4">
                  +234 (08)86 300
                </p>
                <p className="font-tt-norms text-white md:text-[#828282] font-semibold mt-4">
                  Weekdays 8.00 - 16.00
                </p>
                <p className="font-tt-norms text-white md:text-[#565AA5] font-thin mt-1">
                  support@ayuda.ng
                </p>
                <p className="font-tt-norms text-white md:text-[#828282] font-thin mt-12">
                  Copyright 2020 @ayuda. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
