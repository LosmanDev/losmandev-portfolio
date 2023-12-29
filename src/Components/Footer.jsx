import { Icon } from "@iconify/react";
export default function Footer() {
  return (
    <>
      <footer className="footer footer-center p-10 bg-base-200 shadow-xl text-base-content rounded">
        <aside></aside>
        <nav>
          <div className="grid grid-flow-col gap-4 items-center">
            <p className="text-primary font-semibold text-lg">
              LosmanDev © {new Date().getFullYear()}
            </p>
            {/* hello */}
            <a
              href="https://www.linkedin.com/in/liban-osman-losmandev/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon width="25" height="25" icon="mdi:linkedin" />
            </a>
            <a
              href="https://github.com/LosmanDev"
              target="_blank"
              rel="noreferrer"
            >
              <Icon width="25" height="25" icon="mdi:github" />
            </a>
            <div className="flex flex-row items-center justify-center">
              <a className="flex items-center"
                href="https://twitter.com/LosmanDev"
                target="_blank"
                rel="noreferrer"
              >
                <Icon width="25" height="25" icon="mdi:twitter" />
                <span className="font-bold text-xl">𝕏</span>
              </a>
            </div>
          </div>
        </nav>
      </footer>
    </>
  );
}
