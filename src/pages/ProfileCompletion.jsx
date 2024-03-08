import { useState } from "react";
import { Link } from "react-router-dom";

const ProfileCompletion = () => {
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (pass === "" || pass.trim() === "") {
      setError("Password can not be empty");
    } else if (pass !== cpass) {
      setError("Passwords are not the same");
    } else {
    }
  };
  return (
    <>
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-white relative flex flex-col">
          <img
            src="/mix-left.png"
            alt=""
            className="absolute bottom-0 hidden md:block -left-72"
          />
          <div className="w-full h-[100vh] md:w-10/12 mx-auto px-5 md:px-0">
            <Link to="/" className="block">
              <img src="/color-logo.png" alt="" className="w-fit" />
            </Link>
            <div className="w-full flex flex-col gap-4 font-sora text-5xl font-semibold text-[#00A09A] mt-24">
              <p>Improve</p>
              <p>customer</p>
              <p>service today</p>
            </div>
            <p className="mt-20 font-semibold">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer.
            </p>
          </div>
          <img
            src="/grp_right.png"
            alt=""
            className="absolute -top-36 hidden md:block right-0"
          />
        </div>
        <div className="w-full md:w-1/2 bg-[#F6F9FF] py-20 px-5 md:px-0 flex flex-col">
          <div className="w-full md:w-3/5 mx-auto flex flex-col gap-20">
            <p className="text-[#333333] text-4xl font-bold">
              Complete Your Profile
            </p>
            <div className="w-full bg-white  p-5 flex flex-col gap-6">
              <div>
                <p className="text-[#999999]">Name</p>
                <p className="text-[#333333]">
                  Adebunmi Thompson Okunowo-Ibidapo
                </p>
              </div>
              <div>
                <p className="text-[#999999]">Email Address</p>
                <p className="text-[#333333]">
                  b.okunowo@amanasystemslimited.com
                </p>
              </div>
              <div>
                <p className="text-[#999999]">Unit</p>
                <p className="text-[#333333]">
                  User Interface and Expericnce Unit
                </p>
              </div>
              <div>
                <p className="text-[#999999]">Office Location</p>
                <p className="text-[#333333]">
                  Lagos Office 215, Ademola Carrasco Street, Off Obotun Road,
                  Kwara State
                </p>
              </div>
            </div>
            <form
              className="flex flex-col gap-6 w-full mx-auto"
              onSubmit={(e) => handleSubmit(e)}
            >
              {error ? (
                <>
                  <p className="w-full text-center py-2 my-3 bg-[#e64c95] rounded-lg text-white">
                    {error}
                  </p>
                </>
              ) : (
                ""
              )}
              <div className="flex flex-col md:flex-row gap-6 w-full">
                <input
                  type="text"
                  placeholder="Choose Password"
                  className="w-full md:w-1/2 bg-white p-5"
                  required
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Re-enter Password"
                  className="w-full md:w-1/2 bg-white p-5"
                  required
                  value={cpass}
                  onChange={(e) => setCpass(e.target.value)}
                />
              </div>
              <button className="text-white bg-[#00A09A] py-3 px-10 w-fit">
                Continue 1/2
              </button>
            </form>
            <div className="text-[#7D7D7D] text-sm flex gap-3 w-fit ml-auto">
              <Link to="#">About</Link>
              <p>|</p>
              <Link to="#">Terms of Use</Link>
              <p>|</p>
              <Link to="#">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCompletion;
