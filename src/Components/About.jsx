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
      <div id="about" className="bg-accent pb-28 pt-32">
        <div className="flex flex-col items-center justify-center textFont">
          <h1
            data-aos="fade-down"
            data-aos-delay="0"
            className="font-semibold text-center sm:text-3xl text-2xl pb-8"
          >
            About Me
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center">
            <Lottie
              data-aos="fade-right"
              data-aos-delay="200"
              animationData={animationData}
              options={defaultOptions}
              className="w-full sm:w-1/3"
            />

            <p className="lg:leading-relaxed sm: text-slate-500 text-center text-sm sm:w-2/6 px-2">
              <span
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-duration="2000"
              >
                I&apos;m a highly motivated IT professional with experience
                building innovative web applications.{' '}
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="500"
                data-aos-duration="2000"
              >
                Skilled in crafting user-friendly interfaces with HTML5, CSS3,
                JavaScript (ES6+), TypeScript, and React/Nextjs.{' '}
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-duration="2000"
              >
                Adept at building robust backend logic and APIs using Node.js,
                Next.js(SSR, SSG, API Routes) PHP, PostgreSQL, MySQL, MongoDB
                and RESTful principles.{' '}
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-duration="2000"
              >
                Proven ability to solve complex technical challenges and
                delivering high-quality solutions.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
