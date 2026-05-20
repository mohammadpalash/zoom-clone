'use client'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
// import { JoinMeetingButton } from './JoinMeetingDialogbox';

export default function JoinMeeting() {
    const [roomId, setRoomId] = useState("");
    const router = useRouter();

// () => router.push(`/room/${roomId}`)
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Join Meeting</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Join Meeting</DialogTitle>
          <DialogDescription>
            Please enter your link in this field and press Join.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              placeholder="Please Enter your link here"
              type="text"
              
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          
            {/* <Button type="button" onClick={() => router.push(`/room/${roomId}`)}>Join</Button> */}
            <Button>Join</Button>
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
