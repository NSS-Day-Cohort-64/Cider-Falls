import { displayGuests } from "./Guests.js";
import { displayService } from "./Services.js";

const serviceDisplay = displayService()

const container = document.querySelector(".mainContainer")

container.innerHTML = serviceDisplay

