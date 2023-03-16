import Button from "./button";
import Navbar from "./navbar";

export default function Hero() {
  const bg = {
    backgroundImage: "url('./hero.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "cover"
  };
  return (
    <div
      className="2xl:h-[712px] xl:h-[600px] lg:h-[550px] md:h-[500px] pb-20"
      style={bg}
    >
      <div className="container mx-auto px-10 2xl:px-0">
        <Navbar />
        <div className="text-center xl:mt-20 lg:mt-10 md:mt-6">
          <h1 className="text-3xl text-white font-semibold font-mono 2xl:w-6/12 xl:w-8/12 lg:w-10/12 mx-auto leading-relaxed">
            Saya seorang fullstack engineer
            designer
          </h1>
          <p className="text-white text-opacity-60 text-lg 2xl:w-3/12 xl:w-4/12 lg:w-6/12 mx-auto mt-6 leading-relaxed">
            Sejak 1 tahun saya memulai programming.
            design.
          </p>
          <Button href="#profile" pill variant="yellow" className="mt-14">
            Pelajari
          </Button>
        </div>
      </div>
    </div>
  );
}
