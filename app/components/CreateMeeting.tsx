"use client";

import { useRouter } from "next/navigation";

export default function CreateMeeting() {
  const router = useRouter();

  const createMeeting = () => {
    const roomId = crypto.randomUUID();

    router.push(`/room/${roomId}`);
  };

  return (
    <button onClick={createMeeting}>
      Create Meeting
    </button>
  );
}