import React from 'react';
import { Table, Col, Row, Container } from 'reactstrap';
import "./available-rooms.css";

export default class AvailableRooms extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Table bordered dark>
                            <thead>
                                <tr>
                                    <th>Room Number</th>
                                    <th>Price Per Night USD</th>
                                    <th>Max Occupancy</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>89.45</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>72.25</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>82.45</td>
                                    <td>5</td>
                                </tr>
                            </tbody>

                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}