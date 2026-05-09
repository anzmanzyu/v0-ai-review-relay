"use client"

import Lottie from "lottie-react"
import heroFlow from "@/public/hero-flow.json"

export function LottieHero() {
  return (
    <Lottie
      animationData={heroFlow}
      loop={true}
      className="w-full max-w-md mx-auto"
    />
  )
}
