import {
  HiOutlineDownload,
  HiOutlineLockClosed,
  HiOutlineLightningBolt,
  HiOutlineBadgeCheck,
} from "react-icons/hi";
import dots from "../assets/dots.svg";

const Services = () => {
  return (
    <section className="overflow-hidden grid gap-12 sm:gap-16 md:gap-24 lg:gap-32 px-8">
      <a
        href="#"
        className="bg-amber-400 mx-auto my-12 flex gap-2 items-center dark:text-neutral-900 shadow-xl hover:shadow-none py-2 px-6 focus:outline-none focus-visible:ring-2 ring-neutral-900 rounded-md ring-offset-4 ring-offset-white dark:ring-offset-neutral-800 transition-shadow"
      >
        <HiOutlineDownload />
        <span>Download the App</span>
      </a>
      <div className="relative">
        <img
          src={dots}
          alt="dots"
          className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-24 xl:-left-7"
        />
        <img
          src={dots}
          alt="dots"
          className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-24 xl:-right-7"
        />
        <h2 className="sr-only">Our Services</h2>
        <div className="container mx-auto max-w-5xl flex gap-12 flex-wrap items-start justify-center md:justify-between">
          <div className="grid gap-4 justify-items-center text-center md:flex-1">
            <div className="rounded-full border-4 border-amber-400 p-4">
              <HiOutlineLockClosed size={30} />
            </div>
            <h3 className="text-3xl font-bold">Safe</h3>
            <p>Our products are secure and private out-of-the-box</p>
          </div>
          <div className="grid gap-4 justify-items-center text-center md:flex-1">
            <div className="rounded-full border-4 border-amber-400 p-4">
              <HiOutlineLightningBolt size={30} />
            </div>
            <h3 className="text-3xl font-bold">Efficient</h3>
            <p>Feel good about your wallet and the environment</p>
          </div>
          <div className="grid gap-4 justify-items-center text-center md:flex-1">
            <div className="rounded-full border-4 border-amber-400 p-4">
              <HiOutlineBadgeCheck size={30} />
            </div>
            <h3 className="text-3xl font-bold">Proven</h3>
            <p>Leading the Smart Home world for 10 years</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
