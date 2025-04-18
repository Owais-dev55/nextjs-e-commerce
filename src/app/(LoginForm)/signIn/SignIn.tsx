"use client";
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  auth,
  db,
  GoogleAuthProvider,
  signInWithPopup,
} from "@/firebase/config";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import Link from "next/link";
import { FirebaseError } from "firebase/app";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignIn = async (provider: "google" | "email") => {
    setLoading(true);

    try {
      let result: UserCredential | null = null;
      let isFirstTimeLogin = false;
      if (provider === "google") {
        result = await signInWithPopup(auth, new GoogleAuthProvider());

        if (result.user) {
          const userRef = doc(db, "users", result.user.uid);
          const userSnap = await getDoc(userRef);

          if (!userSnap.exists()) {
            isFirstTimeLogin = true;
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
        result = await signInWithEmailAndPassword(auth, email, password);
        setEmail("");
        setPassword("");
        if(result?.user){
          const user = result.user;
          isFirstTimeLogin = user.metadata.creationTime === user.metadata.lastSignInTime;
        }
      }
      if(result?.user && isFirstTimeLogin){
        await fetch('/api/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: result.user.email,
            name: result.user.displayName || "User",
            uid: result.user.uid,
          }),
        })
      }

      if (result) {
        toast.success("Login successful!");
        router.push("/");
      }
    } catch (error: unknown) {
      let message = "Failed to sign in.";

      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/user-not-found":
            message = "User does not exist. Please sign up first.";
            break;
          case "auth/wrong-password":
            message = "Incorrect password. Please try again.";
            break;
          case "auth/invalid-credential":
            message = "Invalid credentials. Please check your email and password.";
            break;
          default:
            message = error.message || message;
        }
      }

      toast.error(message, { position: "top-center" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid place-items-center min-h-screen bg-[#FFFFFF] bg-opacity-50">
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
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            handleSignIn("email");
          }}
        >
          <div className="flex items-center border-b border-[#e0e0e0] mb-5 py-2.5 relative focus-within:border-[#23A6F0]">
  <label className="hidden">Email</label>
  <span className="absolute left-2.5 inset-y-0 flex items-center">
    <i className="fa-solid fa-envelope text-[#737373] text-base"></i>
  </span>
  <input
    type="email"
    className="w-full pl-8 pr-3 py-2 bg-transparent text-[#737373] text-base outline-none"
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />
</div>

<div className="flex items-center border-b border-[#e0e0e0] mb-5 py-2.5 relative focus-within:border-[#23A6F0]">
  <label className="hidden">Password</label>
  <span className="absolute left-2.5 inset-y-0 flex items-center">
    <i className="fa-solid fa-lock text-[#737373] text-base"></i>
  </span>
  <input
    type="password"
    className="w-full pl-8 pr-3 py-2 bg-transparent text-[#737373] text-base outline-none"
    placeholder="Enter your password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
  />
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
        <p className="text-sm text-[#737373] mt-[15px]">
          Don&apos;t have an account?
          <Link
            href="/signUp"
            className="text-[#23A6F0] no-underline font-semibold hover:underline p-2"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>  
  );
};

export default SignIn;
