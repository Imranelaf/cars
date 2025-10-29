
import Slogan from "../components/Home_helper/Slogan";
import VideosCards from "../components/Home_helper/VideosCards";
import Images from "../components/Home_helper/ImagesPosters";
import HitUsUp from "../components/Home_helper/HitUsUp";

export default function Home() {

  return (
    <div className="relative bgColor h-max  w-full">
       <Slogan />
      <VideosCards />
 {/*      <Images />  */}
      <HitUsUp />

    </div>
  );
}
