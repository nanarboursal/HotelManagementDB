import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./reservations.css";
import ReservationCard from "../../Components/ReservationCard/ReservationCard";

export default class Reservations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.initTheme();
    }

    initTheme() {
        let theme = JSON.parse(localStorage.getItem("theme"));
        theme && this.setState({ theme: theme });
    }

    render() {
        return (
            <div className="reservations-background">
                <h1>All Reservations</h1>
                <Container>
                    <Row>
                        <Col>
                            <ReservationCard />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}