import { Icon } from "@iconify/react";
export default function Footer() {
  return (
    <>
      <footer className="footer footer-center p-10 bg-base-200 shadow-xl text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Projects</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <Icon width="25" height="25" icon="mdi:linkedin" />
            </a>
            <a>
              <Icon width="25" height="25" icon="mdi:github" />
            </a>
            <a>
              <Icon width="25" height="25" icon="mdi:twitter" />
            </a>
          </div>
        </nav>
        <aside>
          <p>© LosmanDev 2023 </p>
        </aside>
      </footer>
    </>
  );
}
