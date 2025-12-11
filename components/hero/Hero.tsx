'use client'

import { useRef, useState } from "react";
import Slogan from "./Slogan";
import VideosCards from "./VideosCards";
import Images from "./ImagesPosters";
import HitUsUp from "./HitUsUp";
import VideoPlay from "../video/VideoPlay";



export default function Hero() {
    const [video, setVideo] = useState<string>() 
    const videoPlayerRef = useRef(null)  

  return (
    <div className="relative h-fit bgColor w-fit">
      <div ref={videoPlayerRef}>
        {video && <VideoPlay link={video} setVideo={setVideo} />}
      </div>
      <Slogan />
      <VideosCards setVideo={setVideo} />
      <Images />
      <HitUsUp />

      
    </div>
  );
}