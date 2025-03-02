"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth, db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import SideBar from "../SideBar/SideBar";
import Header from "../SideBar/Header";
import { onAuthStateChanged } from "firebase/auth";

export default function DashboardPage() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  // ✅ Define a list of admin emails
  const adminEmails = ["ksam45180@gmail.com", "admin2@example.com"]; // Add your admin emails here

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.replace("/LoginForm");
        return;
      }

      try {
        // ✅ Check if user's email is in the admin list
        if (adminEmails.includes(user.email || "")) {
          setIsAuthorized(true);
        } else {
          router.replace("/");
        }
      } catch (error) {
        console.error("Error checking user email:", error);
        router.replace("/");
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (!isAuthorized) {
    return null; // Prevent rendering unauthorized content
  }

  return (
    <>
    </>
  );
}
