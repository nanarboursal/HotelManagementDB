import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./reservations.css";
import ReservationCard from "../../Components/ReservationCard/ReservationCard";
import { getTest } from "../../api/test.api";

export default class Reservations extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			test: ""
		};
	}

	componentDidMount() {
		console.log("componentDidMount entered")

		getTest().then(response => {
			console.log("get test entered")
			this.setState({ test: response.request.response })
			console.log("yoyo", this.state.test)

		})
		this.initTheme();
	}

	initTheme() {
		let theme = JSON.parse(localStorage.getItem("theme"));
		theme && this.setState({ theme: theme });
	}

	render() {
		return (
			<div className="reservations-background">
				<h1 style={{ padding: "15px" }}>All Reservations!!</h1>
				<p style={{ color: "white", padding: "15px" }}>
					TEST API RESULTS: {this.state.test}
				</p>
				<Container>
					<Row>
						<Col>
							<ReservationCard />
						</Col>
					</Row>
					<Row className="cards-structure">
						<Col>
							<ReservationCard />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}