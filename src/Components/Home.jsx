export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center animate-fadeIn pt-24 mx-5">
        <h1 className="textFont text-5xl font-semibold text-center pb-5">
          <span className="text-5xl sm:text-3x-l wave mr-2">👋🏾</span>Hi,
          I&apos;m Liban Osman
        </h1>

        <h1 className="textFont text-center">
          Full Stack Software Engineer <br />
          specializing in Web Application Development.
        </h1>
        <div className="flex flex-row items-center justify-center animate-fadeIn pt-5">
          <img
            className="mr-5"
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/linkedin.png"
            alt="linkedin"
          />
          <img
            className="mr-5"
            width="30"
            height="30"
            src="https://img.icons8.com/glyph-neue/30/github.png"
            alt="github"
          />
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios/30/resume.png"
            alt="resume"
          />
        </div>
        <div className="flex flex-col items-center justify-center animate-fadeIn pt-10 textFont">
          <h1 className="font-medium mr-3 pb-5 text-center">
            &lt;/&gt;Toolset
          </h1>
          <div className="flex flex-row">
            <div className="pr-5">
              <img
                className="w-30 h-30"
                src="https://img.icons8.com/color/30/html-5--v1.png"
                alt="html-5--v1"
              />
              <span className="text-primary font-medium text-xs">HTML</span>
            </div>
            <div className=" pr-5">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/color/30/css3.png"
                alt="css3"
              />
              <span className="text-primary font-medium text-xs">CSS</span>
            </div>
            <div className=" pr-5">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/color/30/tailwindcss.png"
                alt="tailwindcss"
              />
              <span className="text-primary font-medium text-xs">Tailwind</span>
            </div>
            <div className=" pr-5">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/color/30/javascript--v1.png"
                alt="javascript--v1"
              />
              <span className="text-primary font-medium text-xs">
                JavaScript
              </span>
            </div>
            <div className=" pr-5">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/color/30/typescript.png"
                alt="typescript"
              />
              <span className="text-primary font-medium text-xs">
                TypeScript
              </span>
            </div>
            <div className=" pr-5">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/30/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
                alt="React"
              />
              <span className="text-primary font-medium text-xs">React</span>
            </div>
            <div className=" pr-5">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/color/30/git.png"
                alt="git"
              />
              <span className="text-primary font-medium text-xs">Git</span>
            </div>
            <div className=" pr-5">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/color/30/nodejs.png"
                alt="nodejs"
              />
              <span className="text-primary font-medium text-xs">Node.js</span>
            </div>
            <div className="pr-5">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/color/30/nextjs.png"
                alt="nextjs"
              />
              <span className="text-primary font-medium text-xs">Next.js</span>
            </div>
            <div className="pr-5">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/30/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png"
                alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo"
              />
              <span className="text-primary font-medium text-xs">MongoDB</span>
            </div>
            <div className="">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/fluency/30/bash.png"
                alt="bash"
              />
              <span className="text-primary font-medium text-xs">Bash</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
