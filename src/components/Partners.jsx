import partner1 from "../assets/partner1.svg";
import partner2 from "../assets/partner2.svg";
import partner3 from "../assets/partner3.svg";
import partner4 from "../assets/partner4.svg";
import partner5 from "../assets/partner5.svg";
import partner6 from "../assets/partner6.svg";

const Partners = () => {
  return (
    <section className="text-center grid gap-8 place-items-center mt-12 sm:mt-16 md:mt-24 lg:mt-32">
      <div className="grid gap-4">
        <h2 className="text-4xl font-bold text-amber-400">Our Partners</h2>
        <p className="w-full max-w-lg">
          We&apos;ve parterned with hundreds of smart home brands to help you
          create a smart home that fits your needs and doesn&apos;t lock you in.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 md:gap-x-16 max-w-2xl mx-auto">
        <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
          <img
            src={partner1}
            alt="Partner"
            className="h-16 w-16"
          />
        </div>
        <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
          <img
            src={partner2}
            alt="Partner"
            className="h-16 w-16"
          />
        </div>
        <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
          <img
            src={partner3}
            alt="Partner"
            className="h-16 w-16"
          />
        </div>
        <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
          <img
            src={partner4}
            alt="Partner"
            className="h-16 w-16"
          />
        </div>
        <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
          <img
            src={partner5}
            alt="Partner"
            className="h-16 w-16"
          />
        </div>
        <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
          <img
            src={partner6}
            alt="Partner"
            className="h-16 w-16"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
