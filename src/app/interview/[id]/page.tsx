"use client";

import React, { useRef } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { generateRandomCompanyName } from "@/utils/randomName";
import { Id } from "../../../../convex/_generated/dataModel";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import animationData from "../../../../public/assets/hourglass-animation.json";

export default function Interview(props: { params: { id: string } }) {
  const interviewId = props.params.id as Id<"interview">;
  const animationRef = useRef<LottieRefCurrentProps>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {interviewId}
      <Lottie lottieRef={animationRef} animationData={animationData} />
    </main>
  );
}
