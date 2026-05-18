"use client";

import {
  LiveKitRoom,
  VideoConference,
} from "@livekit/components-react";

import "@livekit/components-styles";

import { useEffect, useState } from "react";

export default function VideoRooms() {
  const [token, setToken] = useState("");

  useEffect(() => {
    fetch("/api/token")
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
      });
  }, []);

  if (!token) return <div>Loading...</div>;

  return (
    <LiveKitRoom
      token={token}
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      connect={true}
      video={true}
      audio={true}
      style={{ height: "100vh" }}
    >
      <VideoConference />
    </LiveKitRoom>
  );
}