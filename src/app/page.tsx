"use client";

import React, { useState } from "react";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { generateRandomCompanyName } from "@/utils/randomName";
import { Input } from "@/components/ui/input";

type DifficultyLevel = "junior" | "middle" | "senior";

export default function Home() {
  const [companyName, setCompanyName] = useState<string>(
    generateRandomCompanyName()
  );
  const createInterview = useMutation(api.interview.createInterview);
  const router = useRouter();

  const onBtnClick = async (difficultyLevel: DifficultyLevel) => {
    const interviewId = await createInterview({
      companyName,
      difficultyLevel,
    });
    router.push(`/interview/${interviewId}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Input
        placeholder="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <div className="flex flex-row items-center justify-evenly">
        <Button
          onClick={async () => {
            await onBtnClick("junior");
          }}
        >
          Junior
        </Button>
        <Button
          onClick={async () => {
            await onBtnClick("middle");
          }}
        >
          Middle
        </Button>
        <Button
          onClick={async () => {
            await onBtnClick("senior");
          }}
        >
          Senior
        </Button>
      </div>
    </main>
  );
}
