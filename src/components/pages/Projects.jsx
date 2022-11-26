import Project from "../molecules/Project";
import Heading from "../parts/Heading";

export default function Projects() {
	return (
		<div className="mb-24">
			<Heading section="project" />
			<Project
				float="right"
				title="Saarthi"
				image="bg-project1"
				description="Created a multi-vendor E-Commerce App on 2 platforms for sharing, buying and selling notes of freely available courses."
				languages=" NodeJS, ExpressJS, ReactJS, MongoDB"
				link={"https://github.com/AyushR1?tab=repositories&q=saarthi&type=&language=&sort="}
				github={"https://github.com/AyushR1?tab=repositories&q=saarthi&type=&language=&sort="}
			/>
			<Project
				float="left"
				title="Upastithi"
				image="bg-project2"
				description="Composed a Web App to digitally log attendance of RGIPT students, deployed and in use by 5+ faculties, also enabling 300+ students to monitor and track their attendance on a daily basis."
				languages="Django, MySQL, Python"
				link={"https://upastithi.pythonanywhere.com/"}
				github={"https://github.com/AyushR1/Upastithi"}
				
			/>
					<Project
				float="right"
				title="AR_Beast-Kernel"
				image="bg-project3"
				description="Built Custom Android Kernel for 4 Android Devices, which helped 10000+ users to get overall optimized device experience with device-specific Thermal control driver & Current Control driver, along with an Android App to easily configure over 50 offered features."
				languages="TypeScript React Tailwind"
				link={"https://arbeast.github.io/"}
				github={"https://github.com/AyushR1?tab=repositories&q=ar_beast&type=&language=&sort="}
				/>
								<Project
				float="left"
				title="Dynamic Instructions Calculation"
				image="bg-project4"
				description="Developed a tool & web app to find instructions analysis of a program during runtime with 100% precision. Devised a bash script to utilise GDB and get analysis for a given program in 60 seconds"
				languages="Web Tool, Flask, Python, Bash"
				link={"https://ayushr1.github.io/Dynamic-Instructions-Calculation/"}
				github={"https://github.com/AyushR1/Dynamic-Instructions-Calculation"}
			/>
		</div>
	);
}
