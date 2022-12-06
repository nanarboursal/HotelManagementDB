import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./reservations.css";
import ReservationCard from "../../Components/ReservationCard/ReservationCard";
import { getEmployee } from "../../api/employee.api";
import { getReservation } from "../../api/reservation.api";
import { getCreditCard } from "../../api/credit_card.api";
import { getGuest } from "../../api/guest.api";

export default class Reservations extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			test: "",
			reservation: "",
			guest: "",
			creditcard: ""
		};
	}

	componentDidMount() {
		console.log("componentDidMount entered")

		getEmployee().then(response => {
			console.log("get test entered")
			console.log(response)
			this.setState({ test: response.request.response })
			console.log("yoyo1", this.state.test)

		})

		getReservation().then(response => {
			console.log("get reservation entered")
			console.log(response)
			this.setState({ reservation: response.request.response })
			console.log("yoyo2", this.state.reservation)

		})

		getCreditCard().then(response => {
			console.log("get credit entered")
			console.log(response)
			this.setState({ creditcard: response.request.response })
			console.log("yoyo3", this.state.creditcard)

		})

		getGuest().then(response => {
			console.log("get guest entered")
			console.log(response)
			this.setState({ guest: response.request.response })
			console.log("yoyo4", this.state.guest)

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
					GUEST RESULTS: {this.state.guest}
				</p>
				<p style={{ color: "white", padding: "15px" }}>
					CREDIT RESULTS: {this.state.creditcard}
				</p>
				<p style={{ color: "white", padding: "15px" }}>
					RESERVATIONS RESULTS: {this.state.reservation}
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