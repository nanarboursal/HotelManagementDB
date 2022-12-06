import axios from "axios";
import { websitePrefix } from "./api.constants";

export const getEmployee = () => {
	return axios({
		url: websitePrefix + "api/employee",
		method: "GET",
		headers: { "Content-Type": "application/json" },
		mode: "cors",
	})
}