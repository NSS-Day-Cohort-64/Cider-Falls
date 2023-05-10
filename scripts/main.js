import { displayGuests } from "./Guests.js";
import { displayService } from "./Services.js";
import { displayAreas } from "./Areas.js";



const serviceDisplay = displayService()
const guestDisplay = displayGuests()
const areaDisplay = displayAreas()
const container = document.querySelector(".mainContainer")

container.innerHTML = [serviceDisplay, guestDisplay, areaDisplay]



//6 major destinations


