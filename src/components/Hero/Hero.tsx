
import { useRef, useState } from "react";
import VideoPlay from "./services/VideoPlay";
import VideosCards from "./components/VideosCards";
import Slogan from "./components/Slogan";
import Images from "./components/ImagesPosters";
import HitUsUp from "./components/HitUsUp";


export default function Hero() {
    const [video, setVideo] = useState<string>() 
    const videoPlayerRef = useRef(null)  

  return (
    <div className="relative h-fit heroContainer w-fit">
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