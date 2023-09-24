import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <>
      <div
        id="home"
        className="flex flex-col items-center justify-center animate-fadeDown pt-32 sm:pt-44 mx-5 pb-10"
      >
        <h1 className="textFont text-4xl sm:text-5xl font-semibold text-center pb-5">
          <span className="text-5xl  sm:text-5xl wave mr-2">👋🏾</span>Hi,
          I&apos;m Liban Osman
        </h1>

        <h1 className="textFont text-center">
          Full Stack Software Engineer <br />
          specializing in Web Application Development.
        </h1>
        <div className="flex flex-row items-center justify-center animate-fadeIn pt-5">
          <div className="flex flex-col items-center pr-3 pt-2 transform hover:scale-110 transition duration-200 ease-in-out ">
            <a
              href="https://www.linkedin.com/in/liban-osman-losmandev/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon width="35" height="35" icon="skill-icons:linkedin" />
            </a>
            <span className="font-medium text-xs text-slate-600">Linkedin</span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2 transform hover:scale-110 transition duration-200 ease-in-out ">
            <a
              href="https://github.com/LosmanDev"
              target="_blank"
              rel="noreferrer"
            >
              <Icon width="35" height="35" icon="devicon:github" />
            </a>
            <span className="font-medium text-xs text-slate-600">GitHub</span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2 transform hover:scale-110 transition duration-200 ease-in-out ">
            <a
              href="https://drive.google.com/file/d/1fY9heohNnm1e8ddBIPOdLmcZKfyI9-Jm/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Icon width="35" height="35" icon="flat-color-icons:document" />
            </a>
            <span className="font-medium text-xs text-slate-600">Résumé</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center animate-fadeIn pt-10 textFont">
          <h1 className="font-semibold mr-3 pb-3 text-center">
            &lt;/&gt;Toolset
          </h1>
        </div>
        <div className="flex flex-wrap flex-row items-center justify-center">
          <div className="flex flex-col items-center pr-3 pt-2">
            <Icon width="30" height="30" icon="vscode-icons:file-type-html" />
            <span className="font-medium text-xs italic text-slate-600">
              HTML
            </span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2">
            <Icon width="30" height="30" icon="vscode-icons:file-type-css" />
            <span className="font-medium text-xs italic text-slate-600">
              CSS
            </span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2 ">
            <Icon width="30" height="30" icon="logos:tailwindcss-icon" />
            <span className="font-medium text-xs italic text-slate-600">
              Tailwind CSS
            </span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2">
            <Icon width="30" height="30" icon="skill-icons:javascript" />
            <span className="font-medium text-xs italic text-slate-600">
              JavaScript
            </span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2">
            <Icon width="30" height="30" icon="skill-icons:typescript" />
            <span className="font-medium text-xs italic text-slate-600">
              TypeScript
            </span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2">
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
          <div className="flex flex-col items-center pr-3 pt-2">
            <Icon width="30" height="30" icon="logos:nextjs-icon" />
            <span className="font-medium text-xs italic text-slate-600">
              Next.js
            </span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2">
            <Icon width="30" height="30" icon="devicon:git" />
            <span className="font-medium text-xs italic text-slate-600">
              Git
            </span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2">
            <Icon width="30" height="30" icon="devicon:bash" />
            <span className="font-medium text-xs italic text-slate-600">
              Bash
            </span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2">
            <Icon width="30" height="30" icon="logos:nodejs-icon-alt" />
            <span className="font-medium text-xs italic text-slate-600">
              Node.js
            </span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2">
            <Icon width="30" height="30" icon="logos:playwright" />
            <span className="font-medium text-xs italic text-slate-600">
              Playwright
            </span>
          </div>

          <div className="flex flex-col items-center pr-3 pt-2">
            <Icon width="30" height="30" icon="devicon:mongodb" />
            <span className="font-medium text-xs italic text-slate-600">
              MongoDB
            </span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2">
            <Icon width="30" height="30" icon="logos:strapi-icon" />
            <span className="font-medium text-xs italic text-slate-600">
              Strapi
            </span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2">
            <Icon width="30" height="30" icon="skill-icons:sqlite" />
            <span className="font-medium text-xs italic text-slate-600">
              SQlite
            </span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2">
            <Icon width="30" height="30" icon="logos:figma" />
            <span className="font-medium text-xs italic text-slate-600">
              Figma
            </span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2">
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
