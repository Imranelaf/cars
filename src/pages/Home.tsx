
import Slogan from "../components/Home_helper/Slogan";
import VideosCards from "../components/Home_helper/VideosCards";
import Images from "../components/Home_helper/ImagesPosters";
import HitUsUp from "../components/Home_helper/HitUsUp";
import { useState } from "react";
import VideoPlay from "../components/services/VideoPlay";

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
