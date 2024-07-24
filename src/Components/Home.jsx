import { Icon } from '@iconify/react';

export default function Home() {
  return (
    <>
      <div
        id="home"
        className="flex flex-col items-center justify-center
         pt-32 sm:pt-64 mx-5 pb-28"
      >
        <h1
          data-aos="fade-right"
          data-aos-delay="0"
          className="textFont text-4xl sm:text-7xl font-semibold text-center pb-8"
        >
          <span className="text-5xl  sm:text-7xl wave mr-2">👋🏾</span>Hi,
          I&apos;m Liban Osman
        </h1>
        <h1
          data-aos="fade-right"
          data-aos-delay="200"
          className="textFont text-center sm:text-2xl font-medium mb-3"
        >
          Full Stack Developer
        </h1>
        <h3
          data-aos="fade-right"
          data-aos-delay="400"
          className="font-medium italic"
        >
          Digitalizing{' '}
          <span className="bg-gradient-to-r from-[#f9d33c] to-[#F9C23C] text-transparent bg-clip-text ">
            Ideas✨
          </span>{' '}
          for the Web
        </h3>
        <div className="flex flex-row items-center justify-center pt-10">
          <div
            data-aos="fade-right"
            data-aos-delay="600"
            className="flex flex-col items-center px-4 pt-2 transform hover:scale-110 transition duration-200 ease-in-out "
          >
            <a
              href="https://www.linkedin.com/in/liban-osman-losmandev/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon width="40" height="40" icon="skill-icons:linkedin" />
            </a>
            <span className="font-medium text-sm text-slate-600">Linkedin</span>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="800"
            className="flex flex-col items-center px-4 pt-2 transform hover:scale-110 transition duration-200 ease-in-out "
          >
            <a
              href="https://github.com/LosmanDev"
              target="_blank"
              rel="noreferrer"
            >
              <Icon width="40" height="40" icon="devicon:github" />
            </a>
            <span className="font-medium text-sm text-slate-600">GitHub</span>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="1000"
            className="flex flex-col items-center px-4 pt-2 transform hover:scale-110 transition duration-200 ease-in-out "
          >
            <a
              href="https://drive.google.com/file/d/1fY9heohNnm1e8ddBIPOdLmcZKfyI9-Jm/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Icon width="40" height="40" icon="flat-color-icons:document" />
            </a>
            <span className="font-medium text-sm text-slate-600">Résumé</span>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="1100"
          className="flex flex-col items-center justify-center sm:pt-36 pt-20 textFont"
        >
          <h1 className="font-semibold text-2xl sm:text-3xl mr-3 pb-3 text-center">
            &lt;Toolset /&gt;
          </h1>
        </div>
        <div className="flex flex-wrap flex-row items-center justify-center px-5 py-5">
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="flex flex-col items-center pr-3 pt-2"
          >
            <Icon width="30" height="30" icon="vscode-icons:file-type-html" />
            <span className="font-medium text-xs italic text-slate-600">
              HTML
            </span>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="flex flex-col items-center pr-3 pt-2"
          >
            <Icon width="30" height="30" icon="vscode-icons:file-type-css" />
            <span className="font-medium text-xs italic text-slate-600">
              CSS
            </span>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="400"
            className="flex flex-col items-center pr-3 pt-2 "
          >
            <Icon width="30" height="30" icon="devicon:tailwindcss" />
            <span className="font-medium text-xs italic text-slate-600">
              Tailwind CSS
            </span>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="600"
            className="flex flex-col items-center pr-3 pt-2"
          >
            <Icon width="30" height="30" icon="skill-icons:javascript" />
            <span className="font-medium text-xs italic text-slate-600">
              JavaScript
            </span>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="800"
            className="flex flex-col items-center pr-3 pt-2"
          >
            <Icon width="30" height="30" icon="skill-icons:typescript" />
            <span className="font-medium text-xs italic text-slate-600">
              TypeScript
            </span>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="1000"
            className="flex flex-col items-center pr-3 pt-2"
          >
            <Icon
              width="30"
              height="30"
              className="logo react"
              alt="React logo"
              icon="logos:react"
            />
            <span className="font-medium text-xs italic text-slate-600">
              React
            </span>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="1200"
            className="flex flex-col items-center pr-3 pt-2"
          >
            <Icon width="30" height="30" icon="logos:nextjs-icon" />
            <span className="font-medium text-xs italic text-slate-600">
              Nextjs
            </span>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="1400"
            className="flex flex-col items-center pr-3 pt-2"
          >
            <Icon width="30" height="30" icon="devicon:nodejs" />
            <span className="font-medium text-xs italic text-slate-600">
              Node.js
            </span>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="1600"
            className="flex flex-col items-center pr-3 pt-2"
          >
            <Icon width="30" height="30" icon="logos:postgresql" />
            <span className="font-medium text-xs italic text-slate-600">
              PostgreSQL
            </span>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="1800"
            className="flex flex-col items-center pr-3 pt-2"
          >
            <Icon width="30" height="30" icon="devicon:mongodb" />
            <span className="font-medium text-xs italic text-slate-600">
              MongoDB
            </span>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="2000"
            className="flex flex-col items-center pr-3 pt-2"
          >
            <Icon width="30" height="30" icon="logos:strapi-icon" />
            <span className="font-medium text-xs italic text-slate-600">
              Strapi
            </span>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="2200"
            className="flex flex-col items-center pr-3 pt-2"
          >
            <Icon width="30" height="30" icon="logos:playwright" />
            <span className="font-medium text-xs italic text-slate-600">
              Playwright
            </span>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="2400"
            className="flex flex-col items-center pr-3 pt-2"
          >
            <Icon width="30" height="30" icon="devicon:git" />
            <span className="font-medium text-xs italic text-slate-600">
              Git
            </span>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="2600"
            className="flex flex-col items-center pr-3 pt-2"
          >
            <Icon width="30" height="30" icon="devicon:bash" />
            <span className="font-medium text-xs italic text-slate-600">
              Bash
            </span>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="2800"
            className="flex flex-col items-center pr-3 pt-2"
          >
            <Icon width="30" height="30" icon="logos:figma" />
            <span className="font-medium text-xs italic text-slate-600">
              Figma
            </span>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="3000"
            className="flex flex-col items-center pr-3 pt-2"
          >
            <Icon width="30" height="30" icon="devicon:gimp" />
            <span className="font-medium text-xs italic text-slate-600">
              Gimp
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
