import React from "react";
import "./Experience.css";
import Collapsible from "react-collapsible";
import award from './images/hollow.svg'


class Experience extends React.Component {
	constructor(props) {
		super(props);
		this.state = props.data;
	}

	render() {
		const image_url = this.state.image;

		return (
			<div className="master pullUp">
				<div className="block">
					<div className="image-div">
						<a
							target="_blank"
							href={this.state.link}
							rel="noopener noreferrer"
						>
							<img src={image_url} alt="Award" className="award-img" />
						</a>
					</div>
					<div className="content">
						<h1>{this.state.name}</h1>
						<p className="location">{this.state.company}</p>
						<hr />
						<table className="degree">
							<tr>
								<td className="tag">Duration:</td>
								<td className="value">{this.state.duration}</td>
							</tr>
                            <tr>
								<td className="tag" colSpan={2}>
                                    <a href={this.state.certi} id='exp-logo'><img src={award} alt=""/></a>
                                </td>
							</tr>
							<tr>
								<td colSpan={2}>
									<Collapsible
										trigger="Read More.."
										triggerStyle={{ fontWeight: "bold" }}
									>
										<div className="education-ul">{this.state.Description}</div>
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

export default Experience;
