// app/api/token/route.ts

import { AccessToken } from "livekit-server-sdk";

export async function GET() {
  const apiKey = process.env.LIVEKIT_API_KEY!;
  const apiSecret = process.env.LIVEKIT_API_SECRET!;

  const at = new AccessToken(apiKey, apiSecret, {
    identity: `user-${Math.floor(Math.random() * 1000)}`,
  });

  at.addGrant({
    roomJoin: true,
    room: "test-room",
    canPublish: true,
    canSubscribe: true,
  });

  const token = await at.toJwt();

  return Response.json({ token });
}