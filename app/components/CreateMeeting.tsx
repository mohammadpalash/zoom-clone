"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function CreateMeeting() {
  const router = useRouter();

const createMeeting = () => {
    const roomId = crypto.randomUUID();

    router.push(`/room/${roomId}`);
  };

  return (
    <Button onClick={createMeeting}>
      Create Meeting
    </Button>
  );
}