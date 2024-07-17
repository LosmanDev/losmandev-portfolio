import Lottie from 'lottie-react';
import animationData from '../assets/animation_lmmgyu3f.json';

export default function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <div id="about" className="animate-fadeIn bg-accent pb-28 pt-32">
        <div className="flex flex-col items-center justify-center textFont">
          <h1
            data-aos="fade-down"
            data-aos-delay="0"
            className="font-semibold text-center sm:text-3xl text-2xl pb-8"
          >
            About Me
          </h1>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="flex flex-col sm:flex-row items-center justify-center"
          >
            <Lottie
              animationData={animationData}
              options={defaultOptions}
              className="w-full sm:w-1/3"
            />

            <p
              data-aos="fade-right"
              data-aos-delay="600"
              className="text-slate-500 text-center sm:text-xl sm:w-2/6 px-2"
            >
              Beyond software development, my hobbies include playing sports,
              swimming, and enjoying life with my loved ones. My technical
              experience gives me the confidence to pick up new information
              rapidly and tackle difficult problems. I&apos;m driven to learn
              and progress in this ever-evolving field. Ready to digitalize
              ideas into user friendly, mobile-responsive, elegant projects and
              solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
