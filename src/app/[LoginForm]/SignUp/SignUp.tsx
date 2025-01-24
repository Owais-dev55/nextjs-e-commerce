import Link from "next/link";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="grid place-items-center h-screen -mt-10 bg-[#FFFFFF]">
      <div className="bg-[#FAFAFA] rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-10 w-[400px] text-center">
        <h2 className="text-[28px] font-semibold text-[#252B42] mb-5 uppercase tracking-[2px]">
          Sign Up With
        </h2>
        <div className="flex justify-around mb-5">
          <button className="signBtn">
            <i className="fa-brands fa-google mr-2">GOOGLE</i>
          </button>
          <button className="signBtn">
            <i className="fa-brands fa-apple mr-2">APPLE</i>
          </button>
        </div>
        <div className="flex items-center justify-center my-5 relative">
          <span className="text-base text-[#737373] mx-2.5  px-2.5 z-10 relative">
            or
          </span>
          <div className="absolute w-full h-px bg-[#ccc] top-1/2 left-1/2 transform -translate-x-1/2"></div>
        </div>
        <form className="flex flex-col">
          <div className="flex items-center border-b border-[#e0e0e0] mb-5 py-2.5 relative focus-within:border-[#23A6F0]">
            <label className="hidden">Full Name</label>
            <input
              type="text"
              className="signInput"
              placeholder="Enter your full name"
            />
            <span>
              <i className="fa-solid fa-user absolute left-2.5 text-[#737373] text-base"></i>
            </span>
          </div>
          <div className="flex items-center border-b border-[#e0e0e0] mb-5 py-2.5 relative focus-within:border-[#23A6F0]">
            <label className="hidden">Email</label>
            <input
              type="email"
              className="signInput"
              placeholder="Enter your email"
            />
            <span>
              <i className="fa-solid fa-envelope absolute left-2.5 text-[#737373] text-base"></i>
            </span>
          </div>
          <div className="flex items-center border-b border-[#e0e0e0] mb-5 py-2.5 relative focus-within:border-[#23A6F0]">
            <label className="hidden">Password</label>
            <input
              type="password"
              className="signInput"
              placeholder="Enter your password"
            />
            <span>
              <i className="fa-solid fa-lock absolute left-2.5 text-[#737373] text-base"></i>
            </span>
          </div>
          <div className="flex items-center border-b border-[#e0e0e0] mb-5 py-2.5 relative focus-within:border-[#23A6F0]">
            <label className="hidden">Confirm Password</label>
            <input
              type="password"
              className="signInput"
              placeholder="Confirm your password"
            />
            <span>
              <i className="fa-solid fa-lock absolute left-2.5 text-[#737373] text-base"></i>
            </span>
          </div>
          <button
            type="submit"
            className="bg-[#23A6F0] text-white border-none rounded-[25px] py-3 text-base font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#23A6F0] hover:-translate-y-0.5 w-full mt-2.5"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-[#737373] mt-[15px]">
          Already have an account?{" "}
          <Link
            href="/LoginForm/SignIn"
            className="text-[#23A6F0] no-underline font-semibold hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
