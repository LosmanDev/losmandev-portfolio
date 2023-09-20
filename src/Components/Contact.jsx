import { Icon } from "@iconify/react";

export default function Contact() {
  return (
    <>
      <div id="contact" className="bg-accent animate-fadeIn pb-20">
        <div className="flex flex-col items-center justify-center animate-fadeIn pt-10 textFont">
          <h1 className="font-semibold text-center sm:text-3xl text-2xl pb-8">
            Contact
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center animate-fadeIn textFont">
          <div className="flex flex-row items-center justify-center">
            <Icon width="25" height="25" icon="fluent:mail-28-filled" />
            <a href="mailto:Losmandev@gmail.com">
              <h1 className="font-medium text-2xl">Mail</h1>
            </a>
          </div>
          <a href="mailto:Losmandev@gmail.com">
            <h1 className="font-medium pl-1 pb-5">Losmandev@gmail.com</h1>
          </a>
          <input
            type="text"
            placeholder="Email"
            className="input input-primary w-full max-w-xs mb-2"
          />
          <textarea
            placeholder="Message"
            className="textarea textarea-primary textarea-lg w-full max-w-xs"
          ></textarea>
          <button className="btn btn-primary btn-disabled text-accent capitalize mt-2">
            Let&apos;s Connect
          </button>
        </div>
      </div>
    </>
  );
}
