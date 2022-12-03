import React from "react";
import { Card, CardBody, CardTitle, CardText, Container, Row, Col } from "reactstrap";

import "./reservation-card.css";

export const ReservationCard = props => {
    return (
        <div className="card-wrapper">
            <Card>
                <CardBody>
                    <Container>
                        <Row>
                            <Col>
                                <CardTitle className="card-text-diff">
                                    Reservation Name
                                </CardTitle>
                            </Col>
                            <Col>
                                <CardTitle className="card-text-diff">
                                    More Stuff
                                </CardTitle>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <CardTitle className="card-text-diff">
                                    Reservation Name
                                </CardTitle>
                            </Col>
                            <Col>
                                <CardTitle className="card-text-diff">
                                    More Stuff
                                </CardTitle>
                            </Col>
                        </Row>
                    </Container>
                </CardBody>
            </Card>
        </div>
    );
};

export default ReservationCard;