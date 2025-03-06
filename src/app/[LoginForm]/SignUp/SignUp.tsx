"use client";
import Link from "next/link";
import { useState } from "react";
import { auth, app } from "@/firebase/config";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const firestore = getFirestore(app);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match", { position: "top-center" });
      console.log(user);
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(email, password);
      if (res && res.user) {
        await addDoc(collection(firestore, "users"), {
          name: fullName,
          email: email,
          password: password,
          createdAt: new Date(),
          uid: res.user.uid,
        });

        toast.success("User signed up successfully!", {
          position: "top-center",
        });

        setFullName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (err) {
      toast.error(error?.message || "Error signing up", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="grid place-items-center min-h-screen bg-[#FFFFFF] bg-opacity-50 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]">
      <div className="bg-[#FAFAFA] rounded-[15px] shadow-[0_10px_50px_rgba(0,0,0,0.1)] p-10 w-[400px] text-center">
        <h2 className="text-[28px] font-semibold text-[#252B42] mb-5 uppercase tracking-[2px]">
          Sign Up
        </h2>
        <form className="flex flex-col" onSubmit={handleSignUp}>
          <div className="flex items-center border-b border-[#e0e0e0] mb-5 py-2.5 relative focus-within:border-[#23A6F0]">
            <label className="hidden">Full Name</label>
            <input
              type="text"
              className="signInput pl-10 focus:border-[#23A6F0] focus:outline-none transition-colors duration-300 w-full"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <i className="fa-solid fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-[#737373] text-base"></i>
          </div>
          <div className="flex items-center border-b border-[#e0e0e0] mb-5 py-2.5 relative focus-within:border-[#23A6F0]">
            <label className="hidden">Email</label>
            <input
              type="email"
              className="signInput pl-10 focus:border-[#23A6F0] focus:outline-none transition-colors duration-300 w-full"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="fa-solid fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-[#737373] text-base"></i>
          </div>
          <div className="flex items-center border-b border-[#e0e0e0] mb-5 py-2.5 relative focus-within:border-[#23A6F0]">
            <label className="hidden">Password</label>
            <input
              type="password"
              className="signInput pl-10 focus:border-[#23A6F0] focus:outline-none transition-colors duration-300 w-full"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="fa-solid fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-[#737373] text-base"></i>
          </div>
          <div className="flex items-center border-b border-[#e0e0e0] mb-5 py-2.5 relative focus-within:border-[#23A6F0]">
            <label className="hidden">Confirm Password</label>
            <input
              type="password"
              className="signInput pl-10 focus:border-[#23A6F0] focus:outline-none transition-colors duration-300 w-full"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <i className="fa-solid fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-[#737373] text-base"></i>
          </div>
          <button
            type="submit"
            className="bg-[#23A6F0] text-white border-none rounded-[25px] py-3 text-base font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#1E95D6] hover:-translate-y-0.5 w-full mt-2.5 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Signing Up...
              </>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
        <p className="text-sm text-[#737373] mt-[15px]">
          Already have an account?{" "}
          <Link
            href="/LoginForm/SignIn"
            className="text-[#23A6F0] no-underline font-semibold hover:underline transition-all duration-300 ease-in-out"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
