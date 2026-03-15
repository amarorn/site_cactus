"use client";

import { useEffect } from "react";
import { initFirebase } from "@/lib/firebase";

export function FirebaseInit() {
  useEffect(() => {
    initFirebase();
  }, []);
  return null;
}
