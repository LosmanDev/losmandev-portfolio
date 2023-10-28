import { Icon } from "@iconify/react";
import behind from "../assets/images/behind.webp";
import project_x from "../assets/images/projectx.webp";
import waldo_house from "../assets/images/waldo.webp";
import crypto_suuq from "../assets/images/crypto-suuq.webp";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-duration="1200"
        className="animate-fadeIn pb-28 pt-32"
      >
        <div className="flex flex-col items-center justify-center animate-fadeIn textFont">
          <h1
            id="projects"
            className="font-semibold text-center pb-8 sm:text-3xl text-2xl"
          >
            Projects
          </h1>
          <div
            data-aos="fade-left"
            data-aos-duration="1200"
            className="card sm:w-3/6 w-80 glass mt-16 mx-20 shadow-xl shadow-neutral"
          >
            <figure>
              <img
                className="animate-slideIn rounded"
                src={project_x}
                alt="Project X"
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
              <div className="flex flex-row animate-fadeIn py-5">
                <Icon
                  width="25"
                  height="25"
                  className="logo react mr-2"
                  alt="React logo"
                  icon="logos:react"
                />
                <Icon
                  className="mr-2"
                  width="25"
                  height="25"
                  icon="logos:material-ui"
                />
                <Icon width="25" height="25" icon="devicon:nodejs" />
                <Icon width="25" height="25" icon="devicon:mongodb" />
              </div>

              <div className="card-actions justify-center">
                <a
                  href="https://github.com/Quick07/Hack-Diversity-SWE-Group-6-Project"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline">&lt;Code/&gt;</button>
                </a>
                <a
                  href="https://techdive6.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline">Visit🌐</button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1200"
            className="card sm:w-3/6 w-80 glass mt-16 mx-20 shadow-xl shadow-neutral"
          >
            <figure>
              <img
                className="animate-slideIn rounded"
                src={waldo_house}
                alt="Waldo Housing Assistance Center Inc"
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
              <div className="flex flex-row animate-fadeIn py-5 ">
                <Icon
                  className="mr-2"
                  width="25"
                  height="25"
                  icon="vscode-icons:file-type-html"
                />
                <Icon
                  className="mr-2"
                  width="25"
                  height="25"
                  icon="vscode-icons:file-type-css"
                />
                <Icon
                  className="mr-2"
                  width="25"
                  height="25"
                  icon="logos:bootstrap"
                />
                <Icon
                  className="mr-2"
                  width="25"
                  height="25"
                  icon="skill-icons:javascript"
                />
                <Icon width="25" height="25" icon="mdi:responsive" />
              </div>

              <div className="card-actions justify-center">
                <a
                  href="https://github.com/LosmanDev/WaldoFoundation"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline">&lt;Code/&gt;</button>
                </a>
                <a
                  href="https://waldohousingassistance.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline">Visit🌐</button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1200"
            className="card sm:w-3/6 w-80 glass mt-16 mx-20 shadow-xl shadow-neutral"
          >
            <figure>
              <img
                className="animate-slideIn rounded"
                src={behind}
                alt="Behind The Cutz"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Behind The Cutz</h2>
              <p className="text-slate-600 font-light">
                Behind The Cutz is a waitlist app under development for my local
                barber.
              </p>
              <div className="flex flex-row animate-fadeIn py-5 ">
                <Icon
                  width="25"
                  height="25"
                  className="logo react mr-2"
                  alt="React logo"
                  icon="logos:react"
                />
                <Icon
                  className="mr-2"
                  width="25"
                  height="25"
                  icon="simple-icons:daisyui"
                />
                <Icon
                  className="mr-2"
                  width="25"
                  height="25"
                  icon="mdi:responsive"
                />

                <Icon width="25" height="25" icon="logos:tailwindcss-icon" />
              </div>

              <div className="card-actions justify-center">
                <a
                  href="https://github.com/LosmanDev/BehindTheCutz"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline">&lt;Code/&gt;</button>
                </a>
                <a
                  href="https://behind-the-cutz.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline">Visit🌐 </button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1200"
            className="card sm:w-3/6 w-80 glass mt-16 mx-20 shadow-xl shadow-neutral "
          >
            <figure>
              <img
                className="animate-slideIn rounded"
                src={crypto_suuq}
                alt="Crypto Suuq"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Crypto Suuq</h2>
              <p className="text-slate-600 font-light">
                Track your favorite crypto prices utilizing the coin ranking
                API.
              </p>
              <div className="flex flex-row animate-fadeIn py-5">
                <Icon
                  width="25"
                  height="25"
                  className="logo react mr-2"
                  alt="React logo"
                  icon="logos:react"
                />
                <Icon
                  className="mr-2"
                  width="25"
                  height="25"
                  icon="mdi:responsive"
                />
                <Icon width="25" height="25" icon="logos:tailwindcss-icon" />
              </div>

              <div className="card-actions justify-center">
                <a
                  href="https://github.com/LosmanDev/crypto-suuq"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline">&lt;Code/&gt;</button>
                </a>
                <a
                  href="https://crypto-suuq.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline">Visit🌐 </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
