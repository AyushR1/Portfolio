import Heading from "../parts/Heading";
import HeroImage from "../../assets/img/hero.jpg";

export default function About(props) {
  return (
    <div>
      <Heading section={"About"} />
      <div className="flex flex-col md:flex-row l">

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-2xl font-bold text-white">
            I'm a Software Developer
          </h2>
          <p className="text-white py-4 max-w-md">
		  {props.firstParagraph} {props.secondParagraph}
          </p>

        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-full mx-auto md:w-48 md:w-full"
          />
        </div>
      </div>
    </div>
  </div>);
};