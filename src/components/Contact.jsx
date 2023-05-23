import lamp from "../assets/lamp.png";
import { HiOutlineDownload } from "react-icons/hi";
import app from "../assets/app.svg";

const Contact = () => {
  return (
    <section className="container mx-auto px-8 overflow-hidden">
      <div className="flex flex-wrap justify-center gap-12 md:gap-6 lg:gap-20">
        <div className="md:flex-1 md:max-w-sm relative">
          <img
            src={lamp}
            alt="Lamp"
            className="mx-auto"
          />
          <a
            href="#"
            className="bg-amber-400 mx-auto mt-12 md:mb-12 flex gap-2 items-center w-max dark:text-neutral-900 shadow-xl hover:shadow-none py-2 px-6 focus:outline-none focus-visible:ring-2 ring-neutral-900 rounded-md ring-offset-4 ring-offset-white dark:ring-offset-neutral-800 transition-shadow"
          >
            <HiOutlineDownload />
            <span>Download the App</span>
          </a>
          <img
            src={app}
            alt="app"
            width={240}
            className="hidden md:block drop-shadow-xl absolute left-1/2 -translate-x-1/2 max-w-sm xl:max-w-xs z-10"
          />
          <div className="absolute -bottom-18 left-1/2 -translate-x-1/2 aspect-square md:border-8 border-amber-400 rounded-full md:w-72 lg:w-96"></div>
        </div>
        <form className="relative border-8 border-neutral-900 p-6 rounded-lg grid gap-8 md:flex-1 md:max-w-lg my-4 md:my-12 lg:my-16 bg-white dark:bg-neutral-800 w-full">
          <h2 className="text-3xl font-bold">Let&apos;s Connect</h2>
          <div className="relative">
            <input
              type="text"
              id="name"
              className="peer form-input w-full border-4 border-amber-400 rounded-md focus:ring-2 dark:focus:ring-offset-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none dark:bg-amber-400 dark:text-neutral-900 placeholder-transparent"
              placeholder="Your Name"
            />
            <label
              htmlFor="name"
              className="text-neutral-500 peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-neutral-900 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300 absolute -top-4 left-2 -translate-y-1/2"
            >
              Your Name
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              className="peer form-input w-full border-4 border-amber-400 rounded-md focus:ring-2 dark:focus:ring-offset-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none dark:bg-amber-400 dark:text-neutral-900 placeholder-transparent"
              placeholder="Your Email"
            />
            <label
              htmlFor="email"
              className="text-neutral-500 peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-neutral-900 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300 absolute -top-4 left-2 -translate-y-1/2"
            >
              Your Email
            </label>
          </div>
          <div className="relative">
            <textarea
              name="content"
              id="content"
              cols="20"
              rows="5"
              className="peer form-textarea resize-none w-full border-4 border-amber-400 rounded-md focus:ring-2 dark:focus:ring-offset-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none dark:bg-amber-400 dark:text-neutral-900 placeholder-transparent"
              placeholder="How can we help?"
            ></textarea>
            <label
              htmlFor="content"
              className="text-neutral-500 peer-placeholder-shown:left-4 peer-placeholder-shown:top-4 peer-placeholder-shown:text-neutral-900 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300 absolute -top-3 left-2 -translate-y-1/2"
            >
              How can we help?
            </label>
          </div>
          <a
            href="#"
            className="bg-neutral-900 flex gap-2 items-center text-white shadow-xl hover:shadow-none py-2 px-6 focus:outline-none focus-visible:ring-2 ring-neutral-900 rounded-md ring-offset-4 ring-offset-white dark:ring-offset-amber-400 transition-shadow w-max"
          >
            Sign Up
          </a>
        </form>
      </div>
    </section>
  );
};

export default Contact;
