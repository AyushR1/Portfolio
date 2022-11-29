import Hero from "./components/pages/Hero";
import Navbar from "./components/pages/Navbar";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import Footer from "./components/pages/Footer";

function App() {
	const GitLink = "https://github.com/ayushr1";
	const LinkedinLink = "https://linkedin.com/ayushr1";
	const mail = "20cs3018@rgipt.ac.in";

	const sections = ["home", "skills", "project", "about"];

	const frontendSkills = ["CSS","Javascript", "HTML", "React"];
	const backendSkills = ["Django","Flask","Node JS"];
	const toolsSkills = ["GitHub", "Git"];

	//Hero Props
	const name = "Ayush";
	const surname = "Rathore";
	const subtitle =
		"Software Developer";

	//About Props
	const firstParagraph =
		"I am Ayush, Junior Year Undergraduagte in Computer Science & Engineering from RGIPT.";
	const secondParagraph =
		"Demostrated skills in software development thorugh projects, A leaner.";

	return (
		<div className="w-full">


			<Navbar name={name} sections={sections} />

			<div className="mx-60">
				<div id="home" className="mt-20">
					<Hero subtitle={subtitle}/>
				</div>

				<div id="skills" className="py-24">
					<Skills
						frontend={frontendSkills}
						backend={backendSkills}
						tools={toolsSkills}
					/>
				</div>

				<div id="project" className="py-24">
					<Projects />
				</div>

				<div id="about" className="py-24">
					<About
						name={name}
						surname={surname}
						firstParagraph={firstParagraph}
						secondParagraph={secondParagraph}
					/>
				</div>

	
			</div>

			<Footer
				mail={mail}
				github={GitLink}
				linkedin={LinkedinLink}
				name={name}
			/>
		</div>
	);
}

export default App;
