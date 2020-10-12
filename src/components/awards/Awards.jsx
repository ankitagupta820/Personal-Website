import React from "react";
import "./Awards.css";
import '../../styles/style.css'


class Awards extends React.Component {
	constructor(props) {
		super(props);
		this.state=this.props.data;
	
	}

	render() {
		const image_url = this.state.img_src
		return (
			<div className="parent pullUp">
				<div className="image-div">
					<a
						target="_blank"
						href={this.state.img_href}
						rel="noopener noreferrer"
					>
						<img src={image_url} alt="Award" className="award-img" />
					</a>
				</div>
				<div className="content">
					<h1>{this.state.name}</h1>
					<p>{this.state.year}</p>
					<p className="description">{this.state.description}</p>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={this.state.award_link}
						className='Certificate-link'
					>
						<img alt='oops' className='Award_icon'/>
						Certificate
					</a>
				</div>
			</div>
		);
	}
}

export default Awards;
