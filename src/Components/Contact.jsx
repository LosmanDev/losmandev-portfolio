import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send("service_dbwpp2s", "template_ok5qdxf", data, "Pu9T4ZADTt9dCVd-2")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
    console.log(data);
    // window.location.reload();
    // window.scrollTo(0, 0);
  };

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

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col items-center justify-center animate-fadeIn textFont  ">
              <textarea
                name="message"
                id="message"
                {...register("Message", {
                  required: "Message too short",
                  pattern: {
                    value: /^(\b\w+\b\s*){4,}$/,
                    message: "Message too short",
                  },
                })}
                placeholder="Message"
                className={
                  errors.Message?.message
                    ? "textarea textarea-error textarea-lg w-full sm:max-w-lg max-w-xs sm:mx-10"
                    : "textarea textarea-primary textarea-lg w-full sm:max-w-lg max-w-xs sm:mx-10"
                }
              />

              <button
                type="submit"
                className="btn btn-primary text-accent capitalize mt-4 w-full sm:max-w-lg max-w-xs sm:mx-10"
              >
                Let&apos;s Connect
              </button>
              <p className="text-error text-center pt-3">
                {errors.Message?.message}
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
