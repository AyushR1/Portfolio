import Button from "../parts/Button";
import Lottie from "lottie-react";
import Animation from "../../assets/img/animation.json";

export default function Hero(props) {
  return (
    <div className="flex flex-col mb-24">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col flex-1 py-5">
          <div className="py-5 text-[45px] font-semibold text-white font-poppins">
            Hi!{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-gray">
              I am Ayush!
            </span>
          </div>
          <div className="py-[50px]">
            <a href="https://drive.google.com/file/d/1TERh1dRKbsWl8utCpqWhoNTdly-INw8P/view?usp=sharing">
              <Button title={"Resume"} />
            </a>
          </div>
        </div>

        <div className="flex flex-col flex-1 md:pl-[220px] w-48 md:w-48">
          <Lottie animationData={Animation} style={{ height: 650 }} />
        </div>
      </div>
    </div>
  );
}
