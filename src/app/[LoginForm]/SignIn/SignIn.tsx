import Link from "next/link";
import '../SignUp/SignUp.css'
const SignIn = () => {
  return (
    <div className="grid place-items-center h-screen m-0 -mt-10 bg-[#FFFFFF]">
      <div className="bg-[#FAFAFA] rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-10 w-[400px] text-center transition-[width] duration-300 ease-in-out">
        <h2 className="text-[28px] font-semibold text-[#252B42] mb-5 uppercase tracking-[2px]">Login With</h2>
        <div className="flex justify-around mb-5">
          <button className="bg-[#f5f5f5] border-none rounded-[10px] py-2.5 px-5 text-base font-medium text-[#252B42] cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#ececec]">
            <i className="fa-brands fa-google mr-2">GOOGLE</i>
          </button>
          <button className="bg-[#f5f5f5] border-none rounded-[10px] py-2.5 px-5 text-base font-medium text-[#252B42] cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#ececec]">
            <i className="fa-brands fa-apple mr-2">APPLE</i>
          </button>
        </div>
        <div className="flex items-center justify-center my-5 relative">
          <span className="text-base text-[#737373] mx-2.5  px-2.5 z-10 relative">or</span>
          <div className="absolute w-full h-px bg-[#ccc] top-1/2 left-1/2 transform -translate-x-1/2"></div>
        </div>
        <form className="flex flex-col">
          <div className="flex items-center border-b border-[#e0e0e0] mb-5 py-2.5 relative focus-within:border-[#23A6F0]">
            <label className="hidden">Email</label>
            <input
              type="email"
              className="signInput"
              placeholder="Enter your Email"
              required
            />
            <i className="fa-solid fa-envelope absolute left-2.5 text-[#737373] text-base"></i>
          </div>
          <div className="flex items-center border-b border-[#e0e0e0] mb-5 py-2.5 relative focus-within:border-[#23A6F0]">
            <label className="hidden">Password</label>
            <input
              type="password"
              className="signInput"
              placeholder="Enter your Password"
              required
            />
            <i className="fa-solid fa-lock absolute left-2.5 text-[#737373] text-base"></i>
          </div>
          <Link href="#" className="block text-right mb-5 text-sm text-[#737373] no-underline hover:text-[#23A6F0] hover:underline">
            Forgot your password ?
          </Link>
          <button className="bg-[#23A6F0] text-white border-none rounded-[25px] py-3 text-base font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#23A6F0] hover:-translate-y-0.5 w-full mt-2.5">
            Log In
          </button>
        </form>
        <p className="text-sm text-[#737373] mt-[15px]">
          Don&apos;t have an account ?
          <Link href="/LoginForm/SignUp" className="text-[#23A6F0] no-underline font-semibold hover:underline">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

