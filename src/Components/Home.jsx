import { Icon } from "@iconify/react";
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center animate-fadeDown pt-24 mx-5 pb-10">
        <h1 className="textFont text-4xl sm:text-5xl font-semibold text-center pb-5">
          <span className="text-5xl  sm:text-5xl wave mr-2">👋🏾</span>Hi,
          I&apos;m Liban Osman
        </h1>

        <h1 className="textFont text-center">
          Full Stack Software Engineer <br />
          specializing in Web Application Development.
        </h1>
        <div className="flex flex-row items-center justify-center animate-fadeIn pt-5">
          <div className="flex flex-col items-center pr-3 pt-2">
            <Icon width="25" height="25" icon="skill-icons:linkedin" />
            <span className="text-primary font-medium text-xs">Linkedin</span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2">
            <Icon width="25" height="25" icon="devicon:github" />
            <span className="text-primary font-medium text-xs">GitHub</span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2">
            <Icon width="25" height="25" icon="flat-color-icons:document" />
            <span className="text-primary font-medium text-xs">Résumé</span>
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
            <span className="text-primary text-center font-medium text-xs">
              HTML
            </span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2">
            <Icon width="30" height="30" icon="vscode-icons:file-type-css" />
            <span className="text-primary text-center font-medium text-xs">
              CSS
            </span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2 ">
            <Icon width="30" height="30" icon="logos:tailwindcss-icon" />
            <span className="text-primary text-center font-medium text-xs">
              Tailwind CSS
            </span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2">
            <Icon width="30" height="30" icon="skill-icons:javascript" />
            <span className="text-primary font-medium text-xs">JavaScript</span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2">
            <Icon width="30" height="30" icon="skill-icons:typescript" />
            <span className="text-primary font-medium text-xs">TypeScript</span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2">
            <Icon width="30" height="30" icon="logos:react" />
            <span className="text-primary font-medium text-xs">React</span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2">
            <Icon width="30" height="30" icon="devicon:git" />
            <span className="text-primary font-medium text-xs">Git</span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2">
            <Icon width="30" height="30" icon="devicon:bash" />
            <span className="text-primary font-medium text-xs">Bash</span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2">
            <Icon width="30" height="30" icon="logos:nodejs" />
            <span className="text-primary font-medium text-xs">Node.js</span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2">
            <Icon width="30" height="30" icon="logos:nextjs-icon" />
            <span className="text-primary font-medium text-xs">Next.js</span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2">
            <Icon width="30" height="30" icon="devicon:mongodb-wordmark" />
            <span className="text-primary font-medium text-xs">MongoDB</span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2">
            <Icon width="30" height="30" icon="logos:strapi-icon" />
            <span className="text-primary font-medium text-xs">Strapi</span>
          </div>
          <div className="flex flex-col items-center pr-3 pt-2">
            <Icon width="30" height="30" icon="skill-icons:sqlite" />
            <span className="text-primary font-medium text-xs">SQlite</span>
          </div>
        </div>
      </div>
    </>
  );
}
