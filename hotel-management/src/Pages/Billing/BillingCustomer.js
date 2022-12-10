import React,{Component} from "react";
import { Container, Row, Col, Button } from "reactstrap";
import BillingCard from "../../Components/BillingCard/BillingCard";
import "./billing.css";
import { getBilling } from "../../api/test.api";
import { Link} from 'react-router-dom';

export default class BillingCustomer extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			test: []
		};
	}

	componentDidMount() {
		console.log("componentDidMount entered")

		getBilling().then(response => {
			console.log(response)
			this.setState({ test: response.data })
			for (var i = 0; i < response.data.length; i++) {
                console.log("hihi")
                if (response.data[i][2] == "HARRY") {
                    console.log("ello",response.data[i])
					test.push(response.data[i])
					this.setState({test:response.data[i]})
					console.log(test[i])
					
                }
            }
			console.log("bruv", this.state.test)
			

		})
		this.initTheme();
	}

	initTheme() {
		let theme = JSON.parse(localStorage.getItem("theme"));
		theme && this.setState({ theme: theme });
	}

    render() {
        var heading = ["Credit Card ID", "Card Number","Card Name","Card Type","Expiry Date"];
		var body = this.state.test
        return (
			<div className="reservations-background">
				<div className="card-wrapper">
					<Table heading={heading} body={body} />
				</div>
				{/* <Button className="task-button" outline color="warning">
                    <Link className="button-link" to="/billing">See Billing Information (Admin View)</Link>
                </Button>{' '} */}

			</div>
		);
	}
}
class Table extends Component {
	render() {
		var heading = this.props.heading;
		var body = this.props.body;
		return (
			<table className ="center-table" style={{ width: 500 }}>
				<thead >
					<tr className ='rowLines'>
						{heading.map(head => <th>{head}</th>)}
					</tr>
				</thead>
				<tbody className ='rowLines'>
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
			<tr className ='rowLines'>
				{row.map(val => <td>{val}</td>)}
			</tr>
		)
	}
}