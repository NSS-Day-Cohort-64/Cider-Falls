import { getGuests } from "./database.js"

const guests = getGuests()

export const displayGuests = () => {
    let html = " <section class ='guestsection'> <ul>"

    for (const guest of guests) {
        html += `<li>
        ${guest.name}
        </li>`
    }

    html += "</ul> </section>"

    return html
}