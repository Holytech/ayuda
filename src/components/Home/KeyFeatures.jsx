import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const KeyFeatures = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="relative flex">
        <img
          src="/purple_left.png"
          alt=""
          className="absolute top-48 hidden md:block -left-2"
        />
        <div className="relative w-full md:w-9/12 mx-auto px-5 md:px-0 flex flex-col pt-10 md:pt-20">
          <div>
            <p
              className="text-[#181C2F] font-sora text-2xl md:text-5xl font-bold text-center"
              data-aos="fade-up"
            >
              The software that supports customers
            </p>
            <p
              className="text-[#9198A2] text-center font-tt-norms font-thin mt-5 text-lg md:text-2xl w-full md:w-8/12 mx-auto"
              data-aos="fade-up"
            >
              Our helpdesk system covers everything from user management to CMDB
              management to knowledge bases and more.
            </p>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-6 mt-10">
            <div
              className="w-full md:w-1/4 flex flex-col gap-4"
              data-aos="flip-up"
            >
              <img
                src="/pamphlet.png"
                alt="pamphlet"
                className="w-fit mx-auto"
              />
              <p className="text-[#181C2F] font-sora text-center font-bold text-2xl">
                Focus on a service Catalog
              </p>
              <p className="text-[#181C2F] text-center font-tt-norms font-thin">
                Ensures raising a Service Request is seamless
              </p>
            </div>
            <div
              className="w-full md:w-1/4 flex flex-col gap-4"
              data-aos="flip-up"
            >
              <img src="/show.png" alt="show" className="w-fit mx-auto" />
              <p className="text-[#181C2F] font-sora text-center font-bold text-2xl">
                Manage your tickets effortlessly
              </p>
              <p className="text-[#181C2F] text-center font-tt-norms font-thin">
                Pick and assign agents to the right incidents. Automate your
                user journey and flows.
              </p>
            </div>
            <div
              className="w-full md:w-1/4 flex flex-col gap-4"
              data-aos="flip-up"
            >
              <img
                src="/analytics.png"
                alt="analytics"
                className="w-fit mx-auto"
              />
              <p className="text-[#181C2F] font-sora text-center font-bold text-2xl">
                Make data-driven decisions with impact
              </p>
              <p className="text-[#181C2F] text-center font-tt-norms font-thin">
                Customize your reports and get insights to keep up with your
                most important KPI&apos;s.
              </p>
            </div>
            <div
              className="w-full md:w-1/4 flex flex-col gap-4"
              data-aos="flip-up"
            >
              <img src="/task.png" alt="task" className="w-fit mx-auto" />
              <p className="text-[#181C2F] font-sora text-center font-bold text-2xl">
                Automate repititive tasks and actions
              </p>
              <p className="text-[#181C2F] text-center font-tt-norms font-thin">
                Create and manage your own workflows. End time wastage on
                repetitive task.
              </p>
            </div>
          </div>
          <div className="mt-16 md:mt-32">
            <p
              className="w-fit text-[#181C2F] font-sora text-2xl md:text-5xl font-bold mx-auto"
              data-aos="fade-right"
            >
              Key Features
            </p>
            <p
              className="text-[#9198A2] text-center font-tt-norms font-thin mt-5 text-lg md:texFt-2xl w-full md:w-8/12 mx-auto"
              data-aos="fade-left"
            >
              Numerous features make it possible to customize the system in
              accordance with all your needs.
            </p>
          </div>
          <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-3 md:divide-x-2 space-y-10 md:space-y-0">
            <div
              className="flex flex-col items-start gap-5"
              data-aos="fade-right"
            >
              <Link to="#" className="flex gap-4 text-[#3639A4]">
                <img src="/call.png" alt="" />
                <p className="font-bold">Help Desk</p>
              </Link>
              <Link to="#" className="flex gap-4 text-[#9198A2]">
                <img src="/business.png" alt="" />
                <p className="font-bold">Customers</p>
              </Link>
              <Link to="#" className="flex gap-4 text-[#9198A2]">
                <img src="/pie-chart.png" alt="" />
                <p className="font-bold">Analytics</p>
              </Link>
              <Link to="#" className="flex gap-4 text-[#9198A2]">
                <img src="/process.png" alt="" />
                <p className="font-bold">Organization</p>
              </Link>
            </div>
            <div className="col-span-2 md:pl-10 md:pt-4" data-aos="fade-left">
              <p className="text-[#181C2F] font-sora text-3xl font-bold">
                Spotlessly optimized work flows
              </p>
              <p className="text-[#9198A2] font-tt-norms font-thin mt-5 text-lg  w-full">
                A good ITSM tool should not burn a hole in your pocket. With
                ayuda, all you need to do is, sign-up, choose the plan that is
                right for you and we&apos;ll set it up for you, for free.
              </p>
              <div className="flex flex-col md:flex-row w-full gap-4 mt-3">
                <div className="flex flex-col gap-4 w-full md:w-1/2">
                  <p className="flex items-center gap-4">
                    <img src="/check.png" alt="check" />
                    <span className="text-[#262A3C]">Flexible work flows</span>
                  </p>
                  <p className="flex items-center gap-4">
                    <img src="/check.png" alt="check" />
                    <span className="text-[#262A3C]">System SLA Setup</span>
                  </p>
                  <p className="flex items-center gap-4">
                    <img src="/check.png" alt="check" />
                    <span className="text-[#262A3C]">
                      Complete, yet simple user info
                    </span>
                  </p>
                  <p className="flex items-center gap-4">
                    <img src="/check.png" alt="check" />
                    <span className="text-[#262A3C]">
                      Integrated mail client
                    </span>
                  </p>
                </div>
                <div className="flex flex-col gap-4 w-full md:w-1/2">
                  <p className="flex items-center gap-4">
                    <img src="/check.png" alt="check" />
                    <span className="text-[#262A3C]">
                      Reports and Analytics
                    </span>
                  </p>
                  <p className="flex items-center gap-4">
                    <img src="/check.png" alt="check" />
                    <span className="text-[#262A3C]">Dynamic Macros</span>
                  </p>
                  <p className="flex items-center gap-4">
                    <img src="/check.png" alt="check" />
                    <span className="text-[#262A3C]">
                      Integration with multiple Digital Channels
                    </span>
                  </p>
                  <p className="flex items-center gap-4">
                    <img src="/check.png" alt="check" />
                    <span className="text-[#262A3C]">
                      Automatic Email and SMS Notification
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex mt-8 items-center justify-between">
                <button className="bg-[#00A09A] w-fit px-5 py-2 rounded-3xl text-white">
                  Get started now
                </button>
                <Link to="#" className="text-[#5785FB]">
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full mt-20 md:mt-36">
            <div className="mb-10">
              <p
                className="text-[#181C2F] font-sora text-2xl md:text-5xl font-bold text-center"
                data-aos="fade-up"
              >
                How we help your business grow
              </p>
              <p
                className="text-[#9198A2] text-center font-tt-norms font-thin mt-5 text-lg md:text-2xl w-full md:w-8/12 mx-auto"
                data-aos="fade-up"
              >
                Having developed smart solutions for numerous types of
                organizations, we know what matters most
              </p>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-6">
              <div
                className="w-full md:w-1/4 flex flex-col gap-4"
                data-aos="fade-up"
              >
                <img src="/surface1.png" alt="" className="w-fit mx-auto" />
                <p className="text-[#181C2F] font-sora text-center font-bold text-2xl">
                  High availabilty all around the world
                </p>
                <p className="text-[#181C2F] text-center font-tt-norms font-thin">
                  Our services experience uptime more than 99.99% of the time
                </p>
              </div>
              <div
                className="w-full md:w-1/4 flex flex-col gap-4"
                data-aos="fade-up"
              >
                <img
                  src="/communications 1.png"
                  alt=""
                  className="w-fit mx-auto"
                />
                <p className="text-[#181C2F] font-sora text-center font-bold text-2xl">
                  Dedicated 24/7 Premium Support
                </p>
                <p className="text-[#181C2F] text-center font-tt-norms font-thin">
                  Our support team can guide you through phone calls, chat, and
                  email.
                </p>
              </div>
              <div
                className="w-full md:w-1/4 flex flex-col gap-4"
                data-aos="fade-up"
              >
                <img
                  src="/business (1) 1.png"
                  alt=""
                  className="w-fit mx-auto"
                />
                <p className="text-[#181C2F] font-sora text-center font-bold text-2xl">
                  Get ready to experience growth
                </p>
                <p className="text-[#181C2F] text-center font-tt-norms font-thin">
                  Add some tweaks that will lead to better results.
                </p>
              </div>
              <div
                className="w-full md:w-1/4 flex flex-col gap-4"
                data-aos="fade-up"
              >
                <img src="/value1.png" alt="" className="w-fit mx-auto" />
                <p className="text-[#181C2F] font-sora text-center font-bold text-2xl">
                  Customer-driven innovation
                </p>
                <p className="text-[#181C2F] text-center font-tt-norms font-thin">
                  Our customers have a strong influence on our roadmap
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/grp_right.png"
          alt=""
          className="absolute top-96 hidden md:block right-0"
        />
      </div>
    </>
  );
};

export default KeyFeatures;
