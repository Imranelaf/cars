import Slogan from "../components/Home_helper/Slogan";
import VideosCards from "../components/Home_helper/VideosCards";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="relative bgColor min-h-screen w-full p-1 lg:p-4">
      <NavBar />
      <Slogan />
      <VideosCards />
    </div>
  );
}
