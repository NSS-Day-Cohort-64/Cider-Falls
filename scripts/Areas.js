import { getAreas, getGuests } from "./database.js";

const Areas = getAreas()
const Guests = getGuests()

export const displayAreas = () => {
    let html = `<section class= "areaSection">`
    for (const area of Areas) {
        html += `<div><h1> ${area.area}</h1><h4 data-type = 'area' data-id = ${area.id}>attractions: ${area.attraction}</h4></div>`     
    }
        html += `</section>`
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