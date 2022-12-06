import axios from "axios";
import { websitePrefix } from "./api.constants";

export const getReservation = () => {
	return axios({
		url: websitePrefix + "api/reservation",
		method: "GET",
		headers: { "Content-Type": "application/json" },
		mode: "cors",
	})
}

export const postReservation = (
	reservation_ID,
	numRooms,
	guest_ID,
	credit_card_ID,
	numGuests,
	preferences,
	bookingDate,
	bookingTime,
	reserveStartDate,
	reserveEndDate,
	numNights
) => {
	const form = new FormData();
	form.append("Reservation_ID", reservation_ID);
	form.append("No_Rooms", numRooms);
	form.append("Guest_ID", guest_ID);
	form.append("Credit_Card_ID", credit_card_ID);
	form.append("No_Guests", numGuests);
	form.append("Preferences", preferences);
	form.append("Booking_Date", bookingDate);
	form.append("Booking_Time", bookingTime);
	form.append("Reservation_Start_Date", reserveStartDate);
	form.append("Reservation_End_Date", reserveEndDate);
	form.append("No_Nights", numNights);

	return axios({
		url: websitePrefix + "api/reservation/post",
		data: form,
		method: "POST",
		headers: { "Content-Type": "application/json" },
		mode: "cors",
	});
}