import { pastConferences, conferenceContacts } from './data.js'

function generateSpeakers()
 {
    let pastSpeakersDisplay = document.getElementById("past-speakers-display")
    for ( let conference of pastConferences) {
        const year = conference.year
        const conferenceYear = document.createElement("div")
            conferenceYear.innerHTML += 
            `
                <div id="${conference.year}Conference">
                    <p class="conference-year fs-3">Beartooth ${year}</p>
                </div>
            `

        conferenceYear.className = "conference-year-container"
        pastSpeakersDisplay.append(conferenceYear)
    
        if (year === "2020") {
            conferenceYear.innerHTML += `
            <p>No Conference</p>
            `
        } else {
            for (let speaker of conference.speakers) {
                const name = speaker.name
                const homeTown = speaker.homeTown
                const memberOf = speaker.memberOf
    
                    conferenceYear.innerHTML += 
                    `
                        <p>${name}, ${homeTown} (${memberOf})</p>
                    `
    
            }
        }
    }
}

function generateContactList(){
    for (let contact of conferenceContacts) {
        const contactName = contact.name
        const contactNumber = contact.number
    
        contactList.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center text-capitalize py-1 contact-name">
                ${contactName} <span class="contact-number">${contactNumber}</span>
            </li>
        ` 
    }
}
let contactList = document.getElementById("contact-list")

generateSpeakers()
generateContactList()

