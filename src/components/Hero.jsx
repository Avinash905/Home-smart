import app from "../assets/app.svg";
import couch from "../assets/couch.png";

const Hero = () => {
  return (
    <section className="relative pt-16 md:pt-24 lg:pt-48">
      <div className="absolute inset-0 bottom-8 md:bottom-24 xl:bottom-32 bg-gradient-to-b from-amber-400 to-amber-600"></div>
      <div className="container mx-auto grid grid-rows-1 place-items-end px-2 ">
        <img
          src={couch}
          alt="couch"
          className="z-10 row-start-1 row-end-2 col-start-1 col-end-2 mx-auto"
        />
        <img
          src={app}
          alt="app"
          className="z-10 row-start-1 row-end-2 col-start-1 col-end-2 mx-auto w-40 sm:w-52 md:w-64 lg:w-72"
        />
      </div>
    </section>
  );
};

export default Hero;
