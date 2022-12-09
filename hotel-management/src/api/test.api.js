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


export const getEmployee = () => {
	return axios({
		url: websitePrefix + "api/employee",
		method: "GET",
		headers: { "Content-Type": "application/json" },
		mode: "cors",
	})
}

export const getEmployeeCustView = () => {
	return axios({
		url: websitePrefix + "api/employee/customer",
		method: "GET",
		headers: { "Content-Type": "application/json" },
		mode: "cors",
	})
}

export const getBilling = () => {
	return axios({
		url: websitePrefix + "api/billing",
		method: "GET",
		headers: { "Content-Type": "application/json" },
		mode: "cors",
	})
}

