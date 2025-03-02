"use client";
import { signInWithEmailAndPassword } from "firebase/auth";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  auth,
  db,
  GoogleAuthProvider,
  signInWithPopup,
} from "@/firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { doc, setDoc, getDoc } from "firebase/firestore";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userError, setUserError] = useState(false);
  const router = useRouter();

  const checkUserExists = async (email: string) => {
    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);
      return !querySnapshot.empty;
    } catch (error) {
      console.error("Error checking user existence:", error);
      return false;
    }
  };

  const handleSignIn = async (provider: string) => {
    setLoading(true);
    setErrorMessage("");
    setUserError(false);

    try {
      let result: any;
      if (provider === "google") {
        result = await signInWithPopup(auth, new GoogleAuthProvider());

        if (result.user) {
          const userRef = doc(db, "users", result.user.uid);
          const userSnap = await getDoc(userRef);

          if (!userSnap.exists()) {
            await setDoc(userRef, {
              uid: result.user.uid,
              name: result.user.displayName,
              email: result.user.email,
              provider: "google",
              createdAt: new Date(),
            });
          }
        }
      } else if (provider === "email") {
        const userExists = await checkUserExists(email);
        if (!userExists) {
          setUserError(true);
          setTimeout(() => setUserError(false), 3000);
          setLoading(false);
          return;
        }
        result = await signInWithEmailAndPassword(auth, email, password);
        setEmail("");
        setPassword("");
      }

      if (result) {
        console.log("User signed in successfully:", result.user);
        router.push("/");
      }
    } catch (error: any) {
      console.error("Error signing in:", error);
      if (error.code === "auth/user-not-found") {
        setErrorMessage("User does not exist. Please sign up first.");
      } else if (error.code === "auth/wrong-password") {
        setErrorMessage("Incorrect password. Please try again.");
      } else if (error.code === "auth/too-many-requests") {
        setErrorMessage("Too many failed attempts. Please try again later.");
      } else {
        setErrorMessage("Failed to sign in. Please check your credentials.");
      }
      setTimeout(() => setErrorMessage(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid place-items-center min-h-screen bg-[#FFFFFF] bg-opacity-50">
      {userError && (
        <div className="bg-red-500 p-4 rounded-lg text-white mb-4">
          <p>User does not exist. Please sign up first.</p>
        </div>
      )}
      <div className="bg-[#FAFAFA] rounded-[15px] shadow-[0_10px_50px_rgba(0,0,0,0.1)] p-8 w-[400px] text-center">
        <h2 className="text-[28px] font-semibold text-[#252B42] mb-6 uppercase tracking-[2px]">
          Sign In
        </h2>
        <button
          className="w-full bg-white text-[#737373] border border-[#E6E6E6] rounded-[5px] py-3 px-4 text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => handleSignIn("google")}
          disabled={loading}
        >
          <i className="fa-brands fa-google mr-2"></i>Continue with Google
        </button>
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-600">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <form
          className="flex flex-col"
          onSubmit={(e) => {
            e.preventDefault();
            handleSignIn("email");
          }}
        >
          <div className="flex items-center border-b border-[#e0e0e0] mb-5 py-2.5 relative focus-within:border-[#23A6F0]">
            <label className="hidden">Email</label>
            <input
              type="email"
              className="w-full pl-8 pr-3 py-2 bg-transparent text-[#737373] text-base outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>
              <i className="fa-solid fa-envelope absolute left-2.5 text-[#737373] text-base"></i>
            </span>
          </div>
          <div className="flex items-center border-b border-[#e0e0e0] mb-5 py-2.5 relative focus-within:border-[#23A6F0]">
            <label className="hidden">Password</label>
            <input
              type="password"
              className="w-full pl-8 pr-3 py-2 bg-transparent text-[#737373] text-base outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>
              <i className="fa-solid fa-lock absolute left-2.5 text-[#737373] text-base"></i>
            </span>
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
                Signing In...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}
        <p className="text-sm text-[#737373] mt-[15px]">
          Don't have an account?{" "}
          <Link
            href="/LoginForm/SignUp"
            className="text-[#23A6F0] no-underline font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
