import { displayAreas } from "./Areas.js";

//6 major destinations
const areas = displayAreas()

const container = document.querySelector(".mainContainer")
container.innerHTML = areas
