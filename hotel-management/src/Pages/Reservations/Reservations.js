import React, { Component } from "react";
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
			test: [],
			reservation: "",
			guest: "",
			creditcard: ""
		};
	}

	componentDidMount() {
		console.log("componentDidMount entered")

		getGuest().then(response => {
			console.log("get test entered")
			console.log(response)
			this.setState({ test: response.data })
			console.log("yoyo", this.state.test)
			var heading = ['Guest Id', 'First Name', 'Last Name', 'Address', 'Email', 'Phone Number'];
			var body = this.state.test

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
		var heading = ['Guest Id', 'First Name', 'Last Name', 'Address', 'Email', 'Phone Number'];
		// var body = [['555', 'SURABHI', 'GUPTA', '123 SJ ST', 'SURABHI@GMAIL.COM', '122'],['555', 'SURABHI', 'GUPTA', '123 SJ ST', 'SURABHI@GMAIL.COM', '122']];
		var body = this.state.test;
		return (
			<div className="reservations-background">
				<div className="card-wrapper">
					<Table heading={heading} body={body} />
				</div>

			</div>
		);
	}
}
class Table extends Component {
	render() {
		var heading = this.props.heading;
		var body = this.props.body;
		return (
			<table className ="center-table" style={{ width: 900 }}>
				<thead >
					<tr className ='rowLines'>
						{heading.map(head => <th>{head}</th>)}
					</tr>
				</thead>
				<tbody className ='rowLines'>
					{body.map(row => <TableRow row={row} />)}
				</tbody>
			</table>
		);
	}
}

class TableRow extends Component {
	render() {
		var row = this.props.row;
		return (
			<tr className ='rowLines'>
				{row.map(val => <td>{val}</td>)}
			</tr>
		)
	}
}