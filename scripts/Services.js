import { getAreaService, getAreas, getServices } from "./database.js";


const areaServiceInfo = getAreaService()
const serviceInfo = getServices()
const areaInfo = getAreas()

export const displayService = () => {
    let htmlString = `<section class ='serviceSection'> <ul>
<h2> Park Services: </h2>`

    for (const serve of serviceInfo) {
        htmlString += `<p
        data-type="service"
        data-service="${serve.service}" 
        data-id="${serve.id}">
     ${serve.service}</p>`
    }
    htmlString += "</ul> </section>"
    return htmlString


}

document.addEventListener(
    "click",
    (clickEvt) => {
        const serviceTarget = clickEvt.target
        let areaEx = ""
        const serviceID = serviceTarget.dataset.id
        if (serviceTarget.dataset.type === "service") {

            for (const areaIt of areaServiceInfo) {
                if (parseInt(serviceID) === areaIt.ServiceId) {
                    const areaValue = areaIt

                    for (const area of areaInfo) {
                        if (area.id === areaValue.AreaId) {

                            areaEx += area.attraction

                        }
                    }
                }
            }
            window.alert(`${serviceTarget.dataset.service} is available in ${areaEx} `)






        }
    }
)