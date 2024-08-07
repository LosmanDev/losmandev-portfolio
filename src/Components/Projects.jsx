import { Icon } from '@iconify/react';
import behind from '../assets/images/behind.webp';
import project_x from '../assets/images/projectx.webp';
import waldo_house from '../assets/images/waldo.webp';
import crypto_suuq from '../assets/images/crypto-suuq.webp';
import td from '../assets/images/TD.webp';
import nasa from '../assets/images/NASA.webp';
import github from '../assets/images/GitHub.webp';
import boyah from '../assets/images/boyah.webp';
import only from '../assets/images/only.webp';
import masjid from '../assets/images/masjid.webp';
import nomad from '../assets/images/nomad.webp';
import halal from '../assets/images/halal.webp';

export default function Projects() {
  return (
    <>
      <div className="pb-28 pt-32">
        <div className="flex flex-col items-center justify-center textFont">
          <h1
            data-aos-delay="100"
            id="projects"
            className="font-semibold text-center pb-8 sm:text-3xl text-2xl"
          >
            Projects
          </h1>
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-easing="ease-out-sine"
            className="card sm:w-2/6 w-80 glass mt-16 mx-20 shadow-xl shadow-neutral"
          >
            <figure>
              <img className="rounded" src={behind} alt="Behind The Cutz" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Behind The Cutz</h2>
              <p className="text-slate-600 font-light">
                Behind The Cutz is a mobile waitlist app under development for
                my local barber.
              </p>
              <div className="flex flex-row py-5 ">
                <Icon
                  className="mr-2"
                  width="25"
                  height="25"
                  icon="logos:nextjs-icon"
                />
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
                  icon="devicon:tailwindcss"
                />
                <Icon
                  className="mr-2"
                  width="25"
                  height="25"
                  icon="logos:postgresql"
                />
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
                  href="https://behindthecutz.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline">Visit🌐 </button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-easing="ease-out-sine"
            className="card sm:w-2/6 w-80 glass mt-16 mx-20 shadow-xl shadow-neutral"
          >
            <figure>
              <img
                className=" rounded"
                src={waldo_house}
                alt="Waldo Immigration  and Refugee Assistance Center Inc"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Waldo Immigration and Refugee Assistance Center Inc
              </h2>
              <p className="text-slate-600 font-light">
                A Nonprofit Organization Based in Boston, MA
              </p>
              <div className="flex flex-row  py-5 ">
                <Icon
                  className="mr-2"
                  width="25"
                  height="25"
                  icon="logos:nextjs-icon"
                />
                <Icon
                  width="25"
                  height="25"
                  className="mr-2 logo react"
                  alt="React logo"
                  icon="logos:react"
                />

                <Icon
                  className="mr-2"
                  width="25"
                  height="25"
                  icon="devicon:tailwindcss"
                />
              </div>

              <div className="card-actions justify-center">
                <a
                  href="https://github.com/LosmanDev/Waldo-Refugee"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline">&lt;Code/&gt;</button>
                </a>
                <a
                  href="https://waldorefugee.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline">Visit🌐</button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-easing="ease-out-sine"
            className="card sm:w-2/6 w-80 glass mt-16 mx-20 shadow-xl shadow-neutral"
          >
            <figure>
              <img className=" rounded" src={project_x} alt="Project X" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Project X</h2>
              <p className="text-slate-600 font-light">
                Full Stack Web Application for Radiology Reporting of COVID-19
                Chest X-Rays.
              </p>
              <div className="flex flex-row  py-5">
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
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-easing="ease-out-sine"
            className="card sm:w-2/6 w-80 glass mt-16 mx-20 shadow-xl shadow-neutral"
          >
            <figure>
              <img
                className=" rounded"
                src={masjid}
                alt="Local Masjid website"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Masjid At Taqwa</h2>
              <p className="text-slate-600 font-light">
                Local Malden Masjid: A Beacon of Faith and Education
              </p>
              <div className="flex flex-row  py-5 ">
                <Icon
                  className="mr-2"
                  width="25"
                  height="25"
                  icon="logos:nextjs-icon"
                />
                <Icon
                  width="25"
                  height="25"
                  className="mr-2 logo react"
                  alt="React logo"
                  icon="logos:react"
                />

                <Icon
                  className="mr-2"
                  width="25"
                  height="25"
                  icon="devicon:tailwindcss"
                />
              </div>

              <div className="card-actions justify-center">
                <a
                  href="https://github.com/LosmanDev/Masjid-AT-Taqwa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline">&lt;Code/&gt;</button>
                </a>
                <a
                  href="https://masjid-at-taqwa.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline">Visit🌐</button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-easing="ease-out-sine"
            className="card sm:w-2/6 w-80 glass mt-16 mx-20 shadow-xl shadow-neutral"
          >
            <figure>
              <img
                className=" rounded"
                src={only}
                alt="Nurse Staffing Agency"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">1 and Only Staffing LLC</h2>
              <p className="text-slate-600 font-light">
                Minnesota based nurse staffing agency, state certified and have
                a number of years of experience.
              </p>
              <div className="flex flex-row  py-5 ">
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
              </div>

              <div className="card-actions justify-center">
                <a
                  href="https://github.com/LosmanDev/1AndOnlyStaffingLLC"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline">&lt;Code/&gt;</button>
                </a>
                <a
                  href="https://1andonlystaffingllc.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline">Visit🌐</button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-easing="ease-out-sine"
            className="card sm:w-2/6 w-80 glass mt-16 mx-20 shadow-xl shadow-neutral"
          >
            <figure>
              <img
                className=" rounded"
                src={boyah}
                alt="Blog website for Boyah J Farah"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Boyah J Farah</h2>
              <p className="text-slate-600 font-light">
                Blog for Boyah J Farah, America Made Me A Black Man is NAACP
                Image Award Nominee · Winner of Black Authors Matter TV Awards ·
                NPR&apos;s Best Book and many more.
              </p>
              <div className="flex flex-row  py-5 ">
                <Icon
                  className="mr-2"
                  width="25"
                  height="25"
                  icon="logos:nextjs-icon"
                />
                <Icon
                  width="25"
                  height="25"
                  className="mr-2 logo react"
                  alt="React logo"
                  icon="logos:react"
                />

                <Icon
                  className="mr-2"
                  width="25"
                  height="25"
                  icon="devicon:tailwindcss"
                />
              </div>

              <div className="card-actions justify-center">
                <a
                  href="https://github.com/LosmanDev/BoyahJFarah"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline">&lt;Code/&gt;</button>
                </a>
                <a
                  href="https://boyahjfarah.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline">Visit🌐</button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-easing="ease-out-sine"
            className="card sm:w-2/6 w-80 glass mt-16 mx-20 shadow-xl shadow-neutral "
          >
            <figure>
              <img className=" rounded" src={crypto_suuq} alt="Crypto Suuq" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Crypto Suuq</h2>
              <p className="text-slate-600 font-light">
                Track your favorite crypto prices utilizing the coin ranking
                API.
              </p>
              <div className="flex flex-row  py-5">
                <Icon
                  width="25"
                  height="25"
                  className="logo react mr-2"
                  alt="React logo"
                  icon="logos:react"
                />
                <Icon width="25" height="25" icon="devicon:tailwindcss" />
                <Icon
                  className="mr-2"
                  width="25"
                  height="25"
                  icon="icon-park-solid:api"
                />
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

          <div
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-easing="ease-out-sine"
            className="card sm:w-2/6 w-80 glass mt-16 mx-20 shadow-xl shadow-neutral"
          >
            <figure>
              <img
                className=" rounded"
                src={github}
                alt="GitHub Person Finder"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">GitHub Person Finder</h2>
              <p className="text-slate-600 font-light">
                Utilizing GitHubs API, you can track every user and see their
                profile and latest public repos.
              </p>
              <div className="flex flex-row  py-5 ">
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

                <Icon
                  className="mr-2"
                  width="25"
                  height="25"
                  icon="icon-park-solid:api"
                />
              </div>

              <div className="card-actions justify-center">
                <a
                  href="https://github.com/LosmanDev/Github-Person-Finder"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline">&lt;Code/&gt;</button>
                </a>
                <a
                  href="https://losmandev.github.io/Github-Person-Finder/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline">Visit🌐</button>
                </a>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-easing="ease-out-sine"
            className="card sm:w-2/6 w-80 glass mt-16 mx-20 shadow-xl shadow-neutral"
          >
            <figure>
              <img className=" rounded" src={td} alt="TD Garden Events" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">TD Garden Events</h2>
              <p className="text-slate-600 font-light">
                A clone of the TD Garden Events section using Javascript to
                directly manipulate the Document Object Model(DOM).
              </p>
              <div className="flex flex-row  py-5 ">
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
              </div>

              <div className="card-actions justify-center">
                <a
                  href="https://github.com/LosmanDev/TD-Garden-Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline">&lt;Code/&gt;</button>
                </a>
                <a
                  href="https://losmandev.github.io/TD-Garden-Clone/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline">Visit🌐 </button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-easing="ease-out-sine"
            className="card sm:w-2/6 w-80 glass mt-16 mx-20 shadow-xl shadow-neutral "
          >
            <figure>
              <img
                className=" rounded"
                src={nasa}
                alt="Nasa Photo of the day images generated from nasa api since 1995"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">NASA Photo of The Day</h2>
              <p className="text-slate-600 font-light">
                Explore a daily showcase of exceptional images from 1995 to the
                present, captured through NASA&apos;s lens and made accessible
                via their API..
              </p>
              <div className="flex flex-row  py-5">
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
                <Icon
                  className="mr-2"
                  width="25"
                  height="25"
                  icon="icon-park-solid:api"
                />
              </div>

              <div className="card-actions justify-center">
                <a
                  href="https://github.com/LosmanDev/NASA-Photo-API"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline">&lt;Code/&gt;</button>
                </a>
                <a
                  href="https://losmandev.github.io/NASA-Photo-API/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline">Visit🌐 </button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-easing="ease-out-sine"
            className="card sm:w-2/6 w-80 glass mt-16 mx-20 shadow-xl shadow-neutral "
          >
            <figure>
              <img
                className=" rounded"
                src={nomad}
                alt="Nomad Energy a solar energy company based in Somalia"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Nomad Energy</h2>
              <p className="text-slate-600 font-light">
                A solar energy company providing an affordable, reliable and
                renewable energy located in Garoowe, Nugaal Somalia.
              </p>
              <div className="flex flex-row  py-5">
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
                  icon="devicon:jquery-wordmark"
                />
              </div>

              <div className="card-actions justify-center">
                <a
                  href="https://github.com/LosmanDev/Nomad-Energy"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline">&lt;Code/&gt;</button>
                </a>
                <a
                  href="https://losmandev.github.io/Nomad-Energy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline">Visit🌐 </button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-easing="ease-out-sine"
            className="card sm:w-2/6 w-80 glass mt-16 mx-20 shadow-xl shadow-neutral "
          >
            <figure>
              <img
                className=" rounded"
                src={halal}
                alt="Halal meat shop based in roxbury ma"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Halal Meat Express</h2>
              <p className="text-slate-600 font-light">
                Halal Meat Express is a local shop that sells halal meat and
                goods, and also offers a money transfer service to various
                locations around the world.
              </p>
              <div className="flex flex-row  py-5">
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
                  icon="devicon:jquery-wordmark"
                />
              </div>

              <div className="card-actions justify-center">
                <a
                  href="https://github.com/LosmanDev/HalalMeatExpress"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline">&lt;Code/&gt;</button>
                </a>
                <a
                  href="https://losmandev.github.io/HalalMeatExpress/"
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
