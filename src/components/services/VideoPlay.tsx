import { useEffect } from "react";

type VideoLink = {
  link: string;
  setVideo: React.Dispatch<React.SetStateAction<string | undefined>>
};

export default function VideoPlay({ link, setVideo }: VideoLink) {

    useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);


  const close = ()=>{
    setVideo(undefined)
  }

  return (
    <div className="absolute inset-0 h-screen flex justify-center items-center bg-gray-900 bg-opacity-70 backdrop-blur-sm">
      <button
        onClick={close}
        className="p-3 rounded-full bg-red-500 absolute top-10 lg:right-20 z-10 cursor-pointer hover:rotate-180 duration-300"
      >
        <img src="images/icon-close.svg" alt="Close icon" />
      </button>

      <video src={`./videos/${link}`} className="lg:w-8/12 lg:h-8/12 w-full h-3/5 p-1 object-cover rounded-lg" controls autoPlay />
    </div>
  );
}
