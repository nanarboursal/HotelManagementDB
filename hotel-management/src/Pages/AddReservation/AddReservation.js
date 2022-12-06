import React from "react";
import "./add-reservation.css";
import AvailableRooms from "../../Components/AvailableRooms/AvailableRooms";
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row, Container } from 'reactstrap';
import { postReservation } from "../../api/reservation.api";
import { postCreditCard } from "../../api/credit_card.api";
import { postGuest } from "../../api/guest.api";

export default class AddReservations extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			address: "",
			email: "",
			phoneNumber: "",
			cardName: "",
			cardNumber: "",
			cardType: "",
			expirationDate: "",
			numRooms: 0, // might need to hardcode
			roomsSelected: [],
			numNights: 0,
			numGuests: 0,
			preferences: "",
			bookingDate: "", // might need to hardcode
			bookingTime: "", // might need to hardcode
			reserveStartDate: "",
			reserveEndDate: ""
		};

		this.onChange = this.onChange.bind(this);
	}

	getSelectedRooms = (e) => {
		let value = Array.from(e.target.selectedOptions, option => option.value);
		this.setState({ roomsSelected: value });
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	componentDidMount() {
		this.initTheme();
	}

	initTheme() {
		let theme = JSON.parse(localStorage.getItem("theme"));
		theme && this.setState({ theme: theme });
	}

	submitForm() {
		var currentDateTime = new Date();
		var curDate = currentDateTime.toLocaleDateString().replaceAll("/", "-");
		var curTime = currentDateTime.getHours() + ":" + currentDateTime.getMinutes + ":" + currentDateTime.getSeconds;
		this.setState({ bookingDate: "2023-02-02" });
		this.setState({ bookingTime: "2023-02-02" });
		this.setState({ numRooms: 3 });
		var reservation_ID = (Math.floor(1000 + Math.random() * 9000000000)).toString()
		var guest_ID = (Math.floor(1000 + Math.random() * 9000000000)).toString()
		var credit_card_ID = (Math.floor(1000 + Math.random() * 9000000000)).toString()

		var firstName = this.state.firstName
		var lastName = this.state.lastName
		var address = this.state.address
		var email = this.state.email
		var phoneNumber = this.state.phoneNumber

		console.log(firstName, lastName, address, email,
			phoneNumber)
		postGuest(
			guest_ID,
			firstName,
			lastName,
			address,
			email,
			phoneNumber
		)
			.then((response) => {
				if (response.data.success === true) {
					alert("Delivered!");
				}
			}).catch((error) => {
				alert("Something went in guest wrong, Recorded " + error);
			});

		postCreditCard(
			credit_card_ID,
			this.state.cardNumber,
			this.state.cardName,
			this.state.cardType,
			this.state.expirationDate
		)
			.then((response) => {
				if (response.data.success === true) {
					alert("Delivered!");
				}
			}).catch((error) => {
				alert("Something went in creditcard wrong, Recorded " + error);
			});

		postReservation(
			reservation_ID,
			this.state.numRooms,
			this.state.guest_ID,
			this.state.credit_card_ID,
			this.state.numGuests,
			this.state.preferences,
			this.state.bookingDate,
			this.state.bookingTime,
			this.state.reserveStartDate,
			this.state.reserveEndDate,
			this.state.numNights
		)
			.then((response) => {
				if (response.data.success === true) {
					alert("Delivered!");
				}
			}).catch((error) => {
				alert("Something went in reservation wrong, Recorded " + error);
			});

		alert("Congrats, reservation has been booked.");
	}

	render() {
		return (
			<div className="add-reservation-header">
				<h1>Add Reservation</h1>
				<p>Available Rooms</p>
				<AvailableRooms />
				<Container>
					<Row>
						<Col>
							<Form >
								<FormGroup row>
									<Col>
										<FormText><h1 style={{ color: "#ffffbf" }}>Guest Information</h1></FormText>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="firstName" sm={5}>First Name</Label>
									<Col sm={5}>
										<Input value={this.state.firstName} onChange={this.onChange} type="text" name="firstName" id="firstName" placeholder="Enter first name." />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="lastName" sm={5}>Last Name</Label>
									<Col sm={5}>
										<Input value={this.state.lastName} onChange={this.onChange} type="text" name="lastName" id="lastName" placeholder="Enter last name." />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="email" sm={5}>Email</Label>
									<Col sm={5}>
										<Input value={this.state.email} onChange={this.onChange} type="email" name="email" id="email" placeholder="Enter email." />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="phoneNumber" sm={5}>Phone Number</Label>
									<Col sm={3}>
										<Input value={this.state.phoneNumber} onChange={this.onChange} type="phoneNumber" name="phoneNumber" id="phoneNumber" placeholder="Enter phone number." />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="address" sm={5}>Address</Label>
									<Col sm={5}>
										<Input value={this.state.address} onChange={this.onChange} type="address" name="address" id="address" placeholder="Enter address." />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Col>
										<FormText><h1 style={{ color: "#ffffbf" }}>Payment Information</h1></FormText>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="cardName" sm={5}>Name on Card</Label>
									<Col sm={5}>
										<Input value={this.state.cardName} onChange={this.onChange} type="text" name="cardName" id="cardName" placeholder="Enter cardholder name." />
									</Col>
								</FormGroup>
								<FormGroup row >
									<Label for="cardType" sm={5}>Card Type</Label>
									<Col sm={3}>
										<Input value={this.state.cardType} onChange={this.onChange} type="text" name="cardType" id="cardType" placeholder="Visa, MasterCard, Amex, Discover" />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="cardNumber" sm={5}>Card Number</Label>
									<Col sm={3}>
										<Input value={this.state.cardNumber} onChange={this.onChange} type="text" name="cardNumber" id="cardNumber" placeholder="Enter card number." />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="expirationDate" sm={5}>Expiration Date</Label>
									<Col sm={2}>
										<Input value={this.state.expirationDate} onChange={this.onChange} type="text" name="expirationDate" id="expirationDate" placeholder="mm-dd-yyyy" />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Col>
										<FormText><h1 style={{ color: "#ffffbf" }}>Reservation Information</h1></FormText>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="reserveStartDate" sm={5}>Reservation Start Date</Label>
									<Col sm={2}>
										<Input value={this.state.reserveStartDate} onChange={this.onChange} type="text" name="reserveStartDate" id="reserveStartDate" placeholder="mm-dd-yyyy" />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="reserveEndDate" sm={5}>Reservation End Date</Label>
									<Col sm={2}>
										<Input value={this.state.reserveEndDate} onChange={this.onChange} type="text" name="reserveEndDate" id="reserveEndDate" placeholder="mm-dd-yyyy" />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="numNights" sm={5}>Number Of Nights</Label>
									<Col sm={2}>
										<Input value={this.state.numNights} onChange={this.onChange} type="number" name="numNights" id="numNights" placeholder="No. Nights" />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="roomsSelected" sm={5}>Room Number Selection</Label>
									<Col sm={3}>
										<Input value={this.state.roomsSelected} onChange={this.getSelectedRooms} type="select" name="roomsSelected" id="roomsSelected" multiple >
											<option value={1}>1</option>
											<option value={2}>2</option>
											<option value={3}>3</option>
											<option value={4}>4</option>
											<option value={5}>5</option>
										</Input>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="numGuests" sm={5}>Number Of Guests</Label>
									<Col sm={2}>
										<Input value={this.state.numGuests} onChange={this.onChange} type="number" name="numGuests" id="numGuests" placeholder="No. Guests" />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="preferences" sm={5}>Preferences</Label>
									<Col sm={5}>
										<Input value={this.state.preferences} onChange={this.onChange} type="textarea" name="preferences" id="preferences" />
									</Col>
								</FormGroup>
								<FormGroup check row>
									<Col sm={{ size: 10, offset: 2 }}>
										<Button onClick={() => this.submitForm()} className="task-button" outline color="warning">
											Submit
										</Button>{' '}
									</Col>
								</FormGroup>
							</Form>
						</Col>
					</Row>
				</Container>
			</div >
		);
	}
}
