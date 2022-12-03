import React from "react";
// import { Container, Row, Col, Button } from "reactstrap";
import "./employees.css";

export default class Employees extends React.Component {
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
            <div>
                <h1>Here is the employees page</h1>
            </div>
        );
    }
}