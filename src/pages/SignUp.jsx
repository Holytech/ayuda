import { Link } from "react-router-dom";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdRemoveRedEye } from "react-icons/md";
import { useState } from "react";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (fullName === " " || fullName.trim() === "") {
      setError("Name can not be blank");
    } else if (phone === " " || phone.trim() === "") {
      setError("Phonenumber can not be blank");
    } else if (pass === " " || pass.trim() === "") {
      setError("Password can not be blank");
    } else if (pass !== cpass) {
      setError("Passwords are not the same");
    } else {
      window.location.href = "/login";
    }
  };
  return (
    <>
      <div className="w-full h-[100vh] bg-white relative flex items-center justify-center">
        <img
          src="/mix-left.png"
          alt=""
          className="absolute top-48 hidden md:block -left-2"
        />
        <div className="w-full md:w-2/6 px-5 md:px-0 ">
          <Link to="/">
            <img src="color-logo.png" alt="" className="w-fit mx-auto" />
          </Link>
          <p className="text-3xl font-bold w-fit mx-auto mt-10">Sign Up</p>
          <p className="text-xl font-thin w-fit mx-auto mt-5">
            Already have an account yet?{" "}
            <Link to="/login" className="text-[#00A09A]">
              Sign In
            </Link>
          </p>
          <form
            className="w-full mt-16 flex flex-col gap-8"
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
            <div className="relative w-full">
              <input
                id="name"
                type="text"
                placeholder=" "
                required
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900  focus:outline-none"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />

              <label
                htmlFor="name"
                className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
              >
                Full Name
              </label>
            </div>
            <div className="relative w-full">
              <input
                id="phone"
                type="phone"
                placeholder=" "
                required
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900  focus:outline-none"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <label
                htmlFor="phone"
                className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
              >
                Phone Number
              </label>
            </div>
            <div className="flex border-b-2 border-gray-300">
              <div className="relative w-full ">
                <input
                  id="email"
                  type="email"
                  placeholder=" "
                  required
                  className="peer h-10 w-full text-gray-900 focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  htmlFor="email"
                  className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                >
                  Email
                </label>
              </div>
              <MdOutlineAlternateEmail className="text-[#9198A2] text-xl " />
            </div>
            <div className="flex border-b-2 border-gray-300">
              <div className="relative w-full ">
                <input
                  id="password"
                  type="password"
                  placeholder=" "
                  required
                  className="peer h-10 w-full text-gray-900 focus:outline-none"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
                <label
                  htmlFor="password"
                  className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                >
                  Password
                </label>
              </div>
              <MdRemoveRedEye className="text-[#9198A2] text-xl " />
            </div>
            <div className="flex border-b-2 border-gray-300">
              <div className="relative w-full ">
                <input
                  id="cpassword"
                  type="password"
                  placeholder=" "
                  required
                  className="peer h-10 w-full text-gray-900 focus:outline-none"
                  value={cpass}
                  onChange={(e) => setCpass(e.target.value)}
                />
                <label
                  htmlFor="cpassword"
                  className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                >
                  Confirm Password
                </label>
              </div>
              <MdRemoveRedEye className="text-[#9198A2] text-xl " />
            </div>
            <button className="w-full text-white bg-[#00A09A] py-5">
              Sign Up
            </button>
          </form>
        </div>
        <img
          src="/grp_right.png"
          alt=""
          className="absolute top-48 hidden md:block right-0"
        />
      </div>
    </>
  );
};

export default SignUp;
