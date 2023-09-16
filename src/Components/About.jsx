import Lottie from "lottie-react";
import animationData from "../assets/animation_lmmgyu3f.json";

export default function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    size: {
      width: "200px",
      height: "200px",
    },
  };

  return (
    <>
      <div className="bg-accent animate-fadeDown">
        <div className="flex flex-col items-center justify-center animate-fadeIn pt-10 textFont">
          <h1 className="font-medium">About Me</h1>
          <div style={{ width: "300px", height: "400px" }}>
            <Lottie animationData={animationData} options={defaultOptions} />
          </div>
        </div>
      </div>
    </>
  );
}
