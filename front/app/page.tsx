"use client";

import { useState } from "react";
import IntroScreen from "../components/sections/introScreen";
import Home from "./home";

export default function Page() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <IntroScreen onFinish={() => setShowIntro(false)} />;
  }

  return <Home />;
}
