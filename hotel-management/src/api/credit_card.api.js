import axios from "axios";
import { websitePrefix } from "./api.constants";

export const getCreditCard = () => {
	return axios({
		url: websitePrefix + "api/creditcard",
		method: "GET",
		headers: { "Content-Type": "application/json" },
		mode: "cors",
	})
}

export const postCreditCard = (
	credit_card_ID,
	cardNumber,
	cardName,
	cardType,
	expirationDate
) => {
	const form = new FormData();
	form.append("Credit_Card_ID", credit_card_ID);
	form.append("Card_Number", cardNumber);
	form.append("Card_Name", cardName);
	form.append("Card_Type", cardType);
	form.append("Expiration_Date", expirationDate);

	return axios({
		url: websitePrefix + "api/creditcard/post",
		data: form,
		method: "POST",
		headers: { "Content-Type": "application/json" },
		mode: "cors",
	});
}