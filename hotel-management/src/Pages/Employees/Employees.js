import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import EmployeeCard from "../../Components/EmployeeCard/EmployeeCard";
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
            <div className="employees-background">
                <h1 style={{ padding: "15px" }}>All Employees</h1>
                <Container>
                    <Row>
                        <Col>
                            <EmployeeCard />
                        </Col>
                    </Row>
                    <Row className="emp-cards-structure">
                        <Col>
                            <EmployeeCard />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}