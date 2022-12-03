import React from "react";
// import { Container, Row, Col, Button } from "reactstrap";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./home.css";

export default class Home extends React.Component {
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
            <div className="home-header">
                <h1>Welcome to The Best Hotel!</h1>
                <h2 className="console-title">Admin Console</h2>
                <Button className="task-button" outline color="warning">
                    <Link className="button-link" to="/add-reservation">Add Reservation</Link>
                </Button>{' '}
                <Button className="task-button" outline color="warning">
                    <Link className="button-link" to="/reservations">See All Reservations</Link>
                </Button>{' '}
                <Button className="task-button" outline color="warning">
                    <Link className="button-link" to="/employees">Manage Employee Information</Link>
                </Button>{' '}
            </div>
        );
    }
}