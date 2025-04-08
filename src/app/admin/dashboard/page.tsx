"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";

export default function DashboardPage() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  const adminEmails = ["ksam45180@gmail.com", "hashirshaikh729@gmail.com"];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.replace("/LoginForm");
        return;
      }

      try {
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
  }, [adminEmails , router ]);

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (!isAuthorized) {
    return null; 
  }

  return <></>;
}
