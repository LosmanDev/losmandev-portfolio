import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import behind from "../assets/images/behind.webp";
import behind_service from "../assets/images/behind-service.webp";
import project_x from "../assets/images/projectx.webp";
import project_exam from "../assets/images/project-exam.webp";
import waldo_house from "../assets/images/waldo.webp";
import waldo_about from "../assets/images/waldo-about.webp";
import crypto_suuq from "../assets/images/crypto-suuq.webp";
import crypto_body from "../assets/images/crypto.webp";

const behind_images = [
  { src: behind, alt: "Behind The Cutz" },
  { src: behind_service, alt: "Behind The Cutz" },
];
const projectx = [
  { src: project_x, alt: "Project X" },
  { src: project_exam, alt: "Project X" },
];
const waldo = [
  { src: waldo_house, alt: "Waldo Housing Asssistance Center Inc" },
  { src: waldo_about, alt: "Waldo Housing Asssistance Center Inc" },
];
const crypto = [
  { src: crypto_suuq, alt: "Crypto Suuq" },
  { src: crypto_body, alt: "Crypto Suuq" },
];

export default function Projects() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % behind_images.length);
      setCurrentImageIndex((currentImageIndex + 1) % projectx.length);
      setCurrentImageIndex((currentImageIndex + 1) % waldo.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [currentImageIndex]);

  return (
    <>
      <div id="projects" className="animate-fadeIn pb-10">
        <div className="flex flex-col items-center justify-center animate-fadeIn pt-10 textFont">
          <h1 className="font-semibold text-center pb-8 sm:text-3xl text-2xl">
            Projects
          </h1>

          <div className="card sm:w-5/12 w-96 glass shadow-xl">
            <figure>
              <img
                key={behind_images[currentImageIndex].src}
                className="animate-fadeIn"
                src={behind_images[currentImageIndex].src}
                alt={behind_images[currentImageIndex].src}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Behind The Cutz</h2>
              <p className="text-slate-600 font-light">
                Behind The Cutz is a waitlist app developed for my local barber.
              </p>
              <div className="flex flex-row animate-fadeIn ">
                <Icon
                  width="20"
                  height="20"
                  className="logo react mr-1"
                  alt="React logo"
                  icon="logos:react"
                />
                <Icon
                  className="mr-1"
                  width="20"
                  height="20"
                  icon="simple-icons:daisyui"
                />
                <Icon
                  className="mr-1"
                  width="20"
                  height="20"
                  icon="mdi:responsive"
                />

                <Icon width="20" height="20" icon="logos:tailwindcss-icon" />
              </div>

              <div className="card-actions justify-center">
                <button className="btn btn-outline">&lt;Code/&gt;</button>
                <button className="btn btn-outline">Visit🌐 </button>
              </div>
            </div>
          </div>

          <div className="card sm:w-5/12 w-96 glass mt-5 shadow-xl">
            <figure>
              <img
                key={projectx[currentImageIndex].src}
                className="animate-fadeIn"
                src={projectx[currentImageIndex].src}
                alt={projectx[currentImageIndex].src}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Project X</h2>
              <p className="text-slate-600 font-light">
                I collaborated with my team(Tech Dive Group 6) from the
                Hack.Diversity Fellowship to develop a web application that
                enables doctors to Create, Read, Update, and Delete (CRUD)
                structured radiology reports as part of their assessment of
                x-ray images for patients with COVID-19.
              </p>
              <div className="flex flex-row animate-fadeIn ">
                <Icon
                  width="20"
                  height="20"
                  className="logo react mr-1"
                  alt="React logo"
                  icon="logos:react"
                />
                <Icon
                  className="mr-1"
                  width="20"
                  height="20"
                  icon="logos:material-ui"
                />
                <Icon
                  className="mr-1"
                  width="20"
                  height="20"
                  icon="mdi:responsive"
                />
                <Icon
                  className="mr-1"
                  width="20"
                  height="20"
                  icon="logos:nodejs"
                />
                <Icon width="20" height="20" icon="devicon:mongodb-wordmark" />
              </div>

              <div className="card-actions justify-center">
                <button className="btn btn-outline">&lt;Code/&gt;</button>
                <button className="btn btn-outline">Visit🌐</button>
              </div>
            </div>
          </div>
          <div className="card sm:w-5/12 w-96 glass mt-5 shadow-xl">
            <figure>
              <img
                key={waldo[currentImageIndex].src}
                className="animate-fadeIn"
                src={waldo[currentImageIndex].src}
                alt={waldo[currentImageIndex].src}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Waldo Housing Assistance Center Inc
              </h2>
              <p className="text-slate-600 font-light">
                Waldo Housing Assistance Center Inc is a Nonprofit Housing
                Organization based in Boston, MA.
              </p>
              <div className="flex flex-row animate-fadeIn ">
                <Icon
                  className="mr-1"
                  width="20"
                  height="20"
                  icon="vscode-icons:file-type-html"
                />
                <Icon
                  className="mr-1"
                  width="20"
                  height="20"
                  icon="vscode-icons:file-type-css"
                />
                <Icon
                  className="mr-1"
                  width="20"
                  height="20"
                  icon="mdi:responsive"
                />
                <Icon width="20" height="20" icon="logos:bootstrap" />
              </div>

              <div className="card-actions justify-center">
                <button className="btn btn-outline">&lt;Code/&gt;</button>
                <button className="btn btn-outline">Visit🌐</button>
              </div>
            </div>
          </div>
          <div className="card sm:w-5/12 w-96 glass shadow-xl mt-5">
            <figure>
              <img
                key={crypto[currentImageIndex].src}
                className="animate-fadeIn"
                src={crypto[currentImageIndex].src}
                alt={crypto[currentImageIndex].src}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Crypto Suuq</h2>
              <p className="text-slate-600 font-light">
                Track your favorite crypto prices utilizing the coin ranking
                API.
              </p>
              <div className="flex flex-row animate-fadeIn ">
                <Icon
                  width="20"
                  height="20"
                  className="logo react mr-1"
                  alt="React logo"
                  icon="logos:react"
                />
                <Icon
                  className="mr-1"
                  width="20"
                  height="20"
                  icon="mdi:responsive"
                />
                <Icon width="20" height="20" icon="logos:tailwindcss-icon" />
              </div>

              <div className="card-actions justify-center">
                <button className="btn btn-outline">&lt;Code/&gt;</button>
                <button className="btn btn-outline">Visit🌐 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
