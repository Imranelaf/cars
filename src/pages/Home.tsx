import { useState } from "react";
import HitUsUp from "../components/Hero/components/HitUsUp";
import Images from "../components/Hero/components/ImagesPosters";
import Slogan from "../components/Hero/components/Slogan";
import VideosCards from "../components/Hero/components/VideosCards";
import VideoPlay from "../components/Hero/services/VideoPlay";


export default function Home() {
    const [video, setVideo] = useState<string>() 

  return (
    <div className="relative bgColor h-max  w-full overflow-x-hidden">
      {video && <VideoPlay  link={video} setVideo={setVideo}/>}
      <Slogan />
      <VideosCards setVideo={setVideo} />
      <Images />
      <HitUsUp />

    </div>
  );
}
