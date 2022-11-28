import { ReactComponent as Github } from "../../assets/svg/Github.svg";
import { ReactComponent as Linkedin } from "../../assets/svg/Linkedin.svg";

export default function Navigation(props) {
	return props.isLeft === "true" ? (
		<div className="fixed bottom-0 right-auto z-10 w-10 h-60 left-10 backdrop-blur-sm">
			<ul className="flex flex-col items-center p-0 m-0 list-none after:block after:w-px after:h-32 after:content-[''] after:bg-sky-500">
				<li className="h-10">
					<a target="_blank" rel="noopener noreferrer" href={props.github}>
						<Github className="w-5 h-5 transition duration-500 ease-in-out fill-gray hover:fill-sky-500" />
					</a>
				</li>
				<li className="h-10">
					<a target="_blank" rel="noopener noreferrer" href={props.linkedin}>
						<Linkedin className="w-5 h-5 transition duration-500 ease-in-out fill-gray hover:fill-sky-500" />
					</a>
				</li>
			</ul>
		</div>
	) : (
		<div className="fixed bottom-0 left-auto z-10 w-10 h-64 right-10 backdrop-blur-sm">
			<div className="flex flex-col items-center relative after:block after:w-px after:h-32 after:content-[''] after:bg-sky-500">
				<a
					href={"mailto:" + props.mail}
					className="[writing-mode:vertical-lr] tracking-widest my-5 mx-auto text-gray hover:text-sky-500"
				>
					{props.mail}
				</a>
			</div>
		</div>
	);
}
