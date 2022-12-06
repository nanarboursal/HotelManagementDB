import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import BillingCard from "../../Components/BillingCard/BillingCard";
import "./billing.css";

export default class Billing extends React.Component {
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
            <div className="billing-background">
                <h1 style={{ padding: "15px" }}>All Billing Information</h1>
                <Container>
                    <Row>
                        <Col>
                            <BillingCard />
                        </Col>
                    </Row>
                    <Row className="bill-cards-structure">
                        <Col>
                            <BillingCard />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}