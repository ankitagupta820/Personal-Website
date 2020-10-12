import React from "react";
import "./publication.css";
import { Card} from "react-bootstrap";
import { Collapse } from "react-bootstrap";
import book from "./images/book.svg";
import certi from "./images/certi.svg";

class Education extends React.Component {
	constructor(props) {
		super(props);
		this.state = props.data;
		this.setState({ open: false });
		this.setOpen = this.setOpen.bind(this);
	}

	setOpen(open) {
		this.setState({
			open: open,
		});
	}

	render() {
		return(
				<Card className="card pullUp">
					<Card.Header className="Card-header" onClick={() => this.setOpen(!this.state.open)}>
						&nbsp;
						{this.state.name}
					</Card.Header>
					<Card.Body>
						<Card.Title>{this.state.conference}</Card.Title>
						<Card.Text>
						<Collapse in={this.state.open}>						
						<p id="pub-text">{this.state.text}</p>						
					</Collapse>
							<br />
							<a className="publication" href={this.state.link}>
								<img src={book} alt="oops" />
							</a>
							&nbsp;
							<a className="certificate" href={this.state.certificate}>
								<img src={certi} alt="oops" />
							</a>
						</Card.Text>
					</Card.Body>
				</Card>
		);
	}
}

export default Education;
