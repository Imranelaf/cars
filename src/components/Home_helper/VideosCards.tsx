import { useRef } from "react";
import Infos from "./Informations";
import useVideoCardsAnimation from "./Animations/videosCardsAnimations";

const data = [
  { src: "1.mp4", title: "Starting", para: "Let's go" },
  { src: "2.mp4", title: "Racing", para: "Lightning" },
  { src: "3.mp4", title: "Troubles", para: "Accident" },
  { src: "4.mp4", title: "Finish line", para: "Is he win?" },
];

export default function VideosCards() {
  const videoRef = useRef<(HTMLVideoElement | null)[]>([]);

  const playVideo = (index: number) => {
    const video = videoRef.current[index];
    if (video) video.play();
  };

  const pausedVideo = (index: number) => {
    const video = videoRef.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  useVideoCardsAnimation();

  return (
    <section className="w-screen lg:h-screen h-[200vh] lg:flex videoContainer">
      <div className="relative lg:w-1/2 p-1 w-full h-screen videoTrigger flex flex-col gap-5 overflow-hidden">
        {data.map((item, index) => (
          <div
            key={item.src}
            className="w-full h-min videos rounded-sm bg-[#eae7d4] text-red-500 p-1 py-2 lg:p-4 text-center cursor-pointer hover:bg-red-500 hover:text-[#eae7d4] duration-500 flex flex-col justify-center items-center"
            onMouseEnter={() => playVideo(index)}
            onMouseLeave={() => pausedVideo(index)}
          >
            <video
              src={`./videos/${item.src}`}
              className="h-auto w-full rounded-sm max-h-[60vh]"
              ref={(el) => {
                videoRef.current[index] = el;
              }}
              muted
              playsInline
            />
            <h1 className="lg:text-2xl font-semibold !text-black mt-4">
              {item.title}
            </h1>
            <h2 className="lg:text-5xl text-2xl font-extrabold">{item.para}</h2>
          </div>
        ))}
      </div>

      <div className="lg:w-1/2 lg:p-5 p-1 mt-5">
        <Infos />
      </div>
    </section>
  );
}
