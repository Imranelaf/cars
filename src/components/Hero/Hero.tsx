import Slogan from "../components/Home_helper/Slogan";
import VideosCards from "../components/Home_helper/VideosCards";
import Images from "../components/Home_helper/ImagesPosters";
import HitUsUp from "../components/Home_helper/HitUsUp";
import { useRef, useState } from "react";
import VideoPlay from "../components/services/VideoPlay";

export default function Hero() {
    const [video, setVideo] = useState<string>() 
    const videoPlayerRef = useRef(null)  

  return (
    <div className="relative bgColor h-max heroContainer  w-fit h-screen flex">
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