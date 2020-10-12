import React from "react";
import "./projects.css";
import { Collapse } from "react-bootstrap";
import icon from "./images/project.svg";

class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.data;
		this.setState({ open: false });
		this.setOpen = this.setOpen.bind(this);
	}

	setOpen(open) {
		this.setState({
			open: open,
		});
	}

	render() {
		const image_url = this.state.image;
		return (
			<div div className="project-parent pullUp">
				<div className="project-img-div">
					<img
						src={image_url}
						alt="Award"
						className="project-img"
						onClick={() => this.setOpen(!this.state.open)}
					/>
					<h1 className="project-h1">{this.state.name}</h1>
				</div>
				<div className="project-collapse-div">
					<Collapse in={this.state.open}>
						<div className="example-collapse-text">
							{this.state.description}
						</div>
					</Collapse>
				</div>
				<div className="project-link">
					<a className="link" href={this.state.link}>
					<img src={icon} alt="icon" />&nbsp;&nbsp;{this.state.year}&nbsp;|
						
						&nbsp;View Project
					</a>
					<hr />
				</div>
			</div>
		);
	}
}
export default Projects;
