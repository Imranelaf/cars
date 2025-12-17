import { useEffect } from "react";

type VideoLink = {
  link: string;
  setVideo: React.Dispatch<React.SetStateAction<string | undefined>>
};

export default function VideoPlay({ link, setVideo }: VideoLink) {

  useEffect(()=>{

    // Lock body scroll while the video is open by fixing the body position.
    // Save the current scroll position and restore it when the component unmounts.

    const yposition = window.scrollY;
    const positions = document.body.style.position;
    const originalTop = document.body.style.top;

    // Lock the body and keep the visual position unchanged
    document.body.style.position = 'fixed';
    document.body.style.top = `-${yposition}px`;

    return ()=>{
      // Restore body styles and scroll position when closing the video
      document.body.style.position = positions
      document.body.style.top = originalTop;
      window.scrollTo(0, yposition);
    }
  },[])


  // Close the video modal
  const close = ()=>{  
    setVideo(undefined)
  }


  return (
    // Fullscreen overlay with backdrop blur
    <div className="fixed inset-0 z-20 h-screen flex justify-center items-center bg-gray-900 bg-opacity-70 backdrop-blur-sm">
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
