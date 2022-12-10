import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import EmployeeCard from "../../Components/EmployeeCard/EmployeeCard";
import "./employees.css";
import { getEmployee } from "../../api/test.api";
import { Link} from 'react-router-dom';

export default class Employees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: []
        };
    }

    componentDidMount() {
        console.log("componentDidMount entered")

        getEmployee().then(response => {
            console.log(response)
            this.setState({ test: response.data })
            console.log("yoyo", this.state.test)


        })
        this.initTheme();
    }

    initTheme() {
        let theme = JSON.parse(localStorage.getItem("theme"));
        theme && this.setState({ theme: theme });
    }
    nextPath(path) {
        this.props.history.push(path);
      }

    render() {
        var heading = ['Employee Id', 'First Name', 'Last Name', 'Address', 'Email', 'Cell Phone Number', 'Role', 'SSN'];
        var body = this.state.test
        
        return (
            <div className="reservations-background">
                <div className="card-wrapper">
                    <Table heading={heading} body={body} />
                </div>
                <Button className="task-button" outline color="warning">
                    <Link className="button-link" to="/employees/customer">See Employee Information (Customer View)</Link>
                </Button>{' '}

            </div>
        );
    }
}
class Table extends Component {
    render() {
        var heading = this.props.heading;
        var body = this.props.body;
        return (
            <table className="center-table" style={{ width: 900 }}>
                <thead >
                    <tr className='rowLines'>
                        {heading.map(head => <th>{head}</th>)}
                    </tr>
                </thead>
                <tbody className='rowLines'>
                    {body.map(row => <TableRow row={row} />)}
                </tbody>
            </table>
        );
    }
}

class TableRow extends Component {
    render() {
        var row = this.props.row;
        return (
            <tr className='rowLines'>
                {row.map(val => <td>{val}</td>)}
            </tr>
        )
    }
}