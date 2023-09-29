import { Icon } from "@iconify/react";

export default function Contact() {
  return (
    <>
      <div id="contact" className="bg-accent animate-fadeIn pb-28 pt-32">
        <div className="flex flex-col items-center justify-center animate-fadeIn textFont">
          <h1 className="font-semibold text-center sm:text-3xl text-2xl pb-8">
            Contact
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center animate-fadeIn textFont">
          <div className="flex flex-row items-center justify-center pb-5">
            <Icon width="25" height="25" icon="fluent:mail-28-filled" />
            <a href="mailto:Losmandev@gmail.com">
              <h1 className="font-medium italic pl-1">
                Email: Losmandev@gmail.com
              </h1>
            </a>
          </div>

          <textarea
            placeholder="Message"
            className="textarea textarea-primary textarea-lg w-full sm:max-w-md max-w-xs"
            disabled
          ></textarea>
          <button className="btn btn-primary btn-disabled text-accent capitalize mt-4 w-full sm:max-w-md max-w-xs ">
            Let&apos;s Connect
          </button>
        </div>
      </div>
    </>
  );
}
