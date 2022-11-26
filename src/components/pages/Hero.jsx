import Button from "../parts/Button";
import Lottie from "lottie-react";
import Animation from "../../assets/img/animation.json";

export default function Hero(props) {
	return (
		<div className="flex flex-col w-full mb-24">
			<div className="flex flex-row items-center">
				<div className="flex flex-col flex-1 py-5">
					<div className="py-5 text-[45px] font-semibold text-white font-poppins">
						Hi!{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-gray">
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

				<div className="flex flex-col flex-1 pl-[220px]">
					<Lottie animationData={Animation} style={{ height: 650 }} />

					<div className="flex text-[16px] text-gray font-fira mt-[-50px] justify-center">
						&lt; Currently working on
						<span className="ml-2 text-white">{props.workingOn}</span> /&gt;
					</div>
				</div>
			</div>
		</div>
	);
}
