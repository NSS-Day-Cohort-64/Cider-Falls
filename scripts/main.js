import { displayGuests } from "./Guests.js";
import { displayService } from "./Services.js";
import { displayAreas } from "./Areas.js";
const serviceDisplay = displayService()
const areas = displayAreas()
const guests = displayGuests()
const container = document.querySelector(".mainContainer")

container.innerHTML = serviceDisplay + guests + areas





