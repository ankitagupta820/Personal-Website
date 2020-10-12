import React from "react";
import "./Education.css";
import Collapsible from "react-collapsible";


class Education extends React.Component {
	constructor(props) {
		super(props);
		this.state = props;
		this.courses = this.state.data.courses.map((course) => {
			return <li>{course}</li>;
		});
	}

	render() {
		const image_url = this.state.data.img_src;

		return (
			<div className="master pullUp">
				<div className="block">
					<div className="image-div">
						<a
							target="_blank"
							href={this.state.data.img_href}
							rel="noopener noreferrer"
						>
							<img src={image_url} alt="Award" className="award-img" />
						</a>
					</div>
					<div className="content">
						<h1>{this.state.data.name}</h1>
						<p className="location">{this.state.data.location}</p>
						<hr />
						<table className="degree">
							<tr>
								<td className="tag">Degree:</td>
								<td className="value">{this.state.data.degree}</td>
							</tr>
							<tr>
								<td className="tag">Major:</td>
								<td className="value">{this.state.data.major} </td>
							</tr>
							<tr>
								<td className="tag">Year:</td>
								<td className="value">{this.state.data.year} </td>
							</tr>
							<tr>
								<td className="tag">GPA:</td>
								<td className="value">{this.state.data.GPA}</td>
							</tr>
							<tr>
								<td colSpan={2}>
									<Collapsible
										trigger="View Courses"
										triggerStyle={{ fontWeight: "bold" }}
									>
										<ul className="education-ul">{this.courses}</ul>
									</Collapsible>
								</td>
							</tr>
						</table>
					</div>
				</div>
				<br />
			</div>
		);
	}
}

export default Education;
