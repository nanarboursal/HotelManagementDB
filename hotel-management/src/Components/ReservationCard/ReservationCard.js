import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

import "./reservation-card.css";

export const ReservationCard = props => {
    return (
        <div className="card-wrapper">
            <Card>
                <CardBody>
                    <CardTitle className="card-text-diff">
                        Reservation Name
                    </CardTitle>
                    <CardTitle className="card-text-diff">
                        More Stuff
                    </CardTitle>
                    <CardTitle className="card-text-diff">
                        Hello
                    </CardTitle>
                    <hr />
                    <CardText className="card-text-exercises">
                        lolz
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default ReservationCard;