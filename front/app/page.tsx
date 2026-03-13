"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IntroScreen from "../components/sections/introScreen";
import Home from "./home";
export default function Page() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {showIntro ? (
        <IntroScreen key="intro" onFinish={() => setShowIntro(false)} />
      ) : (
        <Home key="home" />
      )}
    </AnimatePresence>
  );
}
