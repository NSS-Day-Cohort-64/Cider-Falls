import { getAreaService, getAreas, getGuests, getServices } from "./database.js";
const serviceArea = getAreaService()
const Areas = getAreas()
const Guests = getGuests()
const services = getServices()
export const displayAreas = () => {

    
    let html = `<section class= "areaSection">`
    for (const area of Areas) {
        html += `<div class="area" data-type = 'area' data-id = ${area.id}><h2>${area.area}</h2></><h3>${area.attraction}</h3>`     
        for(const areaServe of serviceArea) {
        if(area.id === areaServe.AreaId) {
            for(const serve of services) {
                if(serve.id === areaServe.ServiceId) {
                    html += `${serve.service}<br>`;
                }
            }
        }
    }
    html+= `</div>`;
}
        html += "</section>"
        return html
}

addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        const areaIdentifier = itemClicked.dataset.id
        let guestNumber = 0
        if (itemClicked.dataset.type === 'area') {
        for (const guest of Guests) {
            if (guest.areaId === parseInt(areaIdentifier)) {
                guestNumber += 1
            }
        }window.alert(`There are ${guestNumber} guests in this area!`)
        }
    }
)