import React from "react";
// import { Container, Row, Col, Button } from "reactstrap";
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
            <div>
                <h1>Here is the home page</h1>
            </div>
        );
    }
}