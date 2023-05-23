import table from "../assets/table.png";

const About = () => {
  return (
    <section className="overflow-hidden relative mt-12 sm:mt-16 md:mt-24 lg:mt-32">
      <div className="flex flex-wrap-reverse gap-8 justify-center">
        <div className="flex gap-6 flex-wrap flex-col items-start lg:justify-center">
          <div className="flex flex-wrap  flex-col items-start gap-2">
            <h2 className="text-4xl font-bold">Relax, you&apos;re home!</h2>
            <p className="max-w-md">
              All our supported hardware includes traditional inputs so you can
              integrate our products into your house in a way that&apos;s best
              for everyone.
            </p>
          </div>
          <a
            href="#"
            className="bg-amber-400 flex gap-2 items-center dark:text-neutral-900 shadow-xl hover:shadow-none py-2 px-6 focus:outline-none focus-visible:ring-2 ring-neutral-900 rounded-md ring-offset-4 ring-offset-white dark:ring-offset-neutral-800 transition-shadow"
          >
            Sign Up
          </a>
        </div>
        <img
          src={table}
          alt="Table"
          className="z-10"
        />
      </div>
      <div className="absolute -bottom-6 -right-32 aspect-square md:border-8 border-amber-400 rounded-full md:w-64 lg:w-96 xl:max-w-lg"></div>
      <div className="bg-teal-900 h-24 mt-12 xl:h-48 xl:absolute w-screen xl:mt-0 -bottom-8 -z-10"></div>
    </section>
  );
};

export default About;
