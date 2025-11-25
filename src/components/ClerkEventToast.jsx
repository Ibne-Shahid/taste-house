"use client";

import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useAuth } from "@clerk/nextjs";

export default function ClerkEventsToast() {
  const { userId } = useAuth();
  const initialRender = useRef(true);
  const previousUser = useRef(null);

  useEffect(() => {
  
    if (initialRender.current) {
      initialRender.current = false;
      previousUser.current = userId;
      return;
    }

    if (!previousUser.current && userId) {
      toast.success("Logged in successfully!");
    }

    previousUser.current = userId;
  }, [userId]);

  return null;
}
