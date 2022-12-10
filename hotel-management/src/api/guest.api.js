import axios from "axios";
import { websitePrefix } from "./api.constants";

export const getGuest = () => {
	return axios({
		url: websitePrefix + "api/guest",
		method: "GET",
		headers: { "Content-Type": "application/json" },
		mode: "cors",
	})
}

export const postGuest = (
	guest_ID,
	firstName,
	lastName,
	address,
	email,
	phoneNumber
) => {
	console.log("breh")
	console.log(firstName, lastName, address, email,
		phoneNumber)
	const form = new FormData();
	form.append("guest_ID", guest_ID);
	form.append("first_name", firstName);
	form.append("last_name", lastName);
	form.append("address", address);
	form.append("email", email);
	form.append("phone_number", phoneNumber);

	return axios({
		url: websitePrefix + "api/guest/post",
		data: form,
		method: "POST",
		headers: { "Content-Type": "application/json" },
		mode: "cors",
	});
}