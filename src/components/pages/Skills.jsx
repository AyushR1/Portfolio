import Container from "../molecules/Container";
import Heading from "../parts/Heading";

export default function Skills(props) {
	return (
		<div>
			<Heading section="skills" />
			<div className="flex flex-col items-center justify-between md:flex-row ">
				<Container containerTitle="Frontend" elements={props.frontend} />
				<Container
					containerTitle="Backend"
					variant="center"
					elements={props.backend}
				/>
				<Container containerTitle="Tools" elements={props.tools} />
			</div>
		</div>
	);
}
