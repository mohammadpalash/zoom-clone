'use client'
import React from 'react'
// import VideoRooms from "./components/VideoRooms";
import { Button } from "@/components/ui/button";
import VideoRooms from './VideoRooms';

export default function FrontPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black h-96">
        <h1 className="text-3xl text-center">Welcome to zoom clone app.</h1>
        <h3 className="text-2xl text-center text-shadow-cyan-300">What do you want to start?</h3>
        <div className="p-4 flex justify-around mt-8">
          <Button onClick={()=> {<VideoRooms/>}}>Create Meeting</Button>
          <Button>Join Meeting</Button>

        </div>

      </div>
  )
}


