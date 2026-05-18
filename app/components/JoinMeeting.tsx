'use client'

import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function JoinMeeting() {
    const [roomId, setRoomId] = useState("");
    const router = useRouter();


  return (
    <button
  onClick={() => router.push(`/room/${roomId}`)}
>
  Join Meeting
</button>
  )
}
