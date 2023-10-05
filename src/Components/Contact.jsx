import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <textarea
              {...register("Message", {
                required: "Error",
                pattern: /^(\b\w+\b\s*){5,}$/,
              })}
              placeholder="Message"
              className={
                errors.Message?.message
                  ? "textarea textarea-error textarea-lg w-full sm:max-w-md max-w-xs"
                  : "textarea textarea-primary textarea-lg w-full sm:max-w-md max-w-xs"
              }
            ></textarea>

            <button
              type="submit"
              className="btn btn-primary text-accent capitalize mt-4 w-full sm:max-w-md max-w-xs "
            >
              Let&apos;s Connect
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
