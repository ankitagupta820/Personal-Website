import React from "react";
import education from "./data/education.json";
import awards from "./data/awards.json";
import publications from "./data/publications.json";
import projects from "./data/projects.json";
import experience from "./data/experience.json";
import Awards from "./components/awards/Awards.jsx";
import Education from "./components/education/Education.jsx";
import Publications from "./components/publications/Publication.jsx";
import Projects from "./components/projects/Projects.jsx";
import Experience from "./components/experience/Experience.jsx";
import "./App.css";
import Ankita from "./images/Ankita.jpeg";
import { CardColumns } from "react-bootstrap";

import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";

function App() {
	const proj_array = projects.map((project) => {
		return <Projects data={project} />;
	});
	const project_array = <div className="project-master"> {proj_array}</div>;

	const exp_array = experience.map((job) => {
		return <Experience data={job} />;
	});
	const experience_array = <div className="project-master"> {exp_array}</div>;

	const education_array = education.map((education) => {
		return <Education data={education} />;
	});

	const awards_array = awards.map((award) => {
		return <Awards data={award} />;
	});

	const pub_array = publications.map((publication) => {
		return <Publications data={publication} />;
	});
	const publication_array = (
		<CardColumns className="card-deck">{pub_array}</CardColumns>
	);

	return (
		<div className="App">
			<div id="header">
				<img src={Ankita} alt="Ankita"></img>
				<p id="header-text">
					<p id="h1-App">Ankita Gupta </p>
					Teching around.
				</p>
			</div>

			<Router>
				<div>
					<nav className="navbar-app">
						<ul className="App-ul">
							<li>
								<Link to="/Education">Education</Link>
							</li>
							<li>
								<Link to="/Experience">Work Experience</Link>
							</li>
							<li>
								<Link to="/Projects">Projects</Link>
							</li>
							<li>
								<Link to="/Publications">Publications</Link>
							</li>
							<li>
								<Link to="/Awards">Awards</Link>
							</li>
						</ul>
					</nav>
					<div id="app-con">
						<Switch>
							<Route path="/Education">{education_array}</Route>
							<Route path="/Awards">{awards_array}</Route>
							<Route path="/Publications">{publication_array}</Route>
							<Route path="/Projects">{project_array}</Route>
							<Route path="/Experience">{experience_array}</Route>
						</Switch>
					</div>
				</div>
			</Router>
			<div class="text-center py-3 App-footer">
				<a
					id="social"
					href="https://www.linkedin.com/in/ankita-er-gupta/"
					class="fa fa-linkedin"
				></a>
				<a
					id="social"
					href="https://www.instagram.com/myriad.mirth/"
					class="fa fa-instagram"
				></a>
				<a
					id="social"
					href="mailto:ankita.er.gupta@gmail.com"
					class="fa fa-google"
				></a>
				<a
					id="social"
					href="https://github.com/ankitagupta820"
					class="fa fa-github"
				></a>
			</div>
			<div className="text-center py-2 App-subfooter ">
				{" "}
				©2020 | Made by Ankita Gupta
			</div>
		</div>
	);
}

export default App;
