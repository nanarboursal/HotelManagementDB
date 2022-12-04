import axios from "axios";
import { websitePrefix } from "./api.constants";

export const getTest = () => {
	return axios({
		url: websitePrefix + "api/test",
		method: "GET",
		headers: { "Content-Type": "application/json" },
		mode: "cors",
	})
}