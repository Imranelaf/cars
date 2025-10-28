
import Slogan from "../components/Home_helper/Slogan";
import VideosCards from "../components/Home_helper/VideosCards";
import Images from "../components/Home_helper/ImagesPosters";

export default function Home() {
  
  return (
    <div className="relative bgColor h-screen flex gap-5  w-max">
      <div className="comp"><Slogan /></div>
      <div className="comp"><VideosCards /></div>
      <div className="comp"><Images /></div> 
    </div>
  );
}
