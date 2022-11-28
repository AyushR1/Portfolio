import Button from "../parts/Button";
import HeroImage from "../../assets/img/hero.jpg";

export default function Hero(props) {
  return (
    <div className="flex flex-col mb-24 grid-flow-row">
      <div className="flex flex-col items-center md:flex-row">
        <div className="flex flex-col flex-1 py-5">
          <div className="py-5 text-[45px] font-semibold text-white font-poppins">
            Hi!{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-gray">
              I am Ayush!
            </span>
          </div>
          <div className="text-[23px] text-gray font-poppins">
            {props.subtitle}
          </div>
          <div className="py-[50px]">
            <a href="https://drive.google.com/file/d/1TERh1dRKbsWl8utCpqWhoNTdly-INw8P/view?usp=sharing">
              <Button title={"Resume"} />
            </a>
          </div>
        </div>

        <div className="flex flex-col w-64 md:w-5/12">
          <img src={HeroImage} alt="my profile" className="rounded-full" />
        </div>
      </div>
    </div>
  );
}
