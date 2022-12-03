import React from "react";
import "./add-reservation.css";
import AvailableRooms from "../../Components/Navigation/AvailableRooms/AvailableRooms";
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row, Container } from 'reactstrap';

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
            numRooms: 0,
            roomsSelected: [],
            numGuests: 0,
            preferences: "",
            bookingDate: "",
            bookingTime: "",
            reserveStartDate: "",
            reserveEndDate: ""
        };

        this.onChange = this.onChange.bind(this);
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
        console.log(this.state.cardName);
        console.log(this.state.cardNumber);
        console.log(this.state.cardType);
        console.log(this.state.expirationDate);
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
                                <FormGroup tag="fieldset" row >
                                    <legend className="col-form-label col-sm-5">Card Type</legend>
                                    <Col sm={2}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="radio1" />{' '}
                                                Visa
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label >
                                                <Input type="radio" name="radio1" />{' '}
                                                Discover
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="radio1" />{' '}
                                                MasterCard
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="radio1" />{' '}
                                                American Express
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="cardNumber" sm={5}>Card Number</Label>
                                    <Col sm={3}>
                                        <Input value={this.state.cardNumber} onChange={this.onChange} type="text" name="cardNumber" id="cardNumber" placeholder="Enter card number." />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="expDate" sm={5}>Expiration Date</Label>
                                    <Col sm={2}>
                                        <Input type="date" name="date" id="expDate" placeholder="date placeholder" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col>
                                        <FormText><h1 style={{ color: "#ffffbf" }}>Reservation Information</h1></FormText>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="startDate" sm={5}>Reservation Start Date</Label>
                                    <Col sm={2}>
                                        <Input type="date" name="date" id="startDate" placeholder="date placeholder" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="endDate" sm={5}>Reservation End Date</Label>
                                    <Col sm={2}>
                                        <Input type="date" name="date" id="endDate" placeholder="date placeholder" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="roomSelect" sm={5}>Room Number Selection</Label>
                                    <Col sm={3}>
                                        <Input type="select" name="roomSelect" id="roomSelect" multiple >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="noGuests" sm={5}>Number Of Guests</Label>
                                    <Col sm={2}>
                                        <Input type="number" name="NoGuests" id="NoGuests" placeholder="No. Guests" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="preferences" sm={5}>Preferences</Label>
                                    <Col sm={5}>
                                        <Input type="textarea" name="preferences" id="preferences" />
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

/*

GUEST
Guest_ID
First_Name
Last_Name
Address
Email
Phone_Number

CREDIT_CARD
Credit_Card_ID
Card_Number
Card_Name
Card_Type
Expiration_Date
Security_Code

RESERVATION
Reservation_ID
No_Rooms
Guest_ID
No_People
Preferences
Booking_Date
Booking_Time
Reservation_Start_Date
Reservation_End_Date

*/