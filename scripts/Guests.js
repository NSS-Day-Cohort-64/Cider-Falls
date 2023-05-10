import { getGuests } from "./database.js"

const guests = getGuests()

export const displayGuests = () => {
    let html = " <section class ='guestSection'> <ul> <h2>All Guest</h2>"

    for (const guest of guests) {
        html += `<li>
        ${guest.name}
        </li>`
    }

    html += "</ul> </section>"

    return html
}