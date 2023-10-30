"use client";

import React from "react";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { generateRandomCompanyName } from "@/utils/randomName";

export default function Home() {
  const createInterview = useMutation(api.interview.createInterview);
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello
      <Button
        onClick={async () => {
          const interviewId = await createInterview({
            companyName: generateRandomCompanyName(),
            difficultyLevel: "junior",
          });
          router.push(`/interview/${interviewId}`);
        }}
      >
        Test
      </Button>
    </main>
  );
}
