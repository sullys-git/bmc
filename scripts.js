import {
    pastConferences,
    conferenceContacts
} from './data.js'


const pastSpeakersDisplay = document.getElementById("past-speakers-display")

// REFACTOR WITH PARAMETERS
// 1. declare an empty array to hold the HTML for each Year
// 2. 
function generateSpeakers() {
    for (let conference of pastConferences) {
        const year = conference.year
        const conferenceYear = document.createElement("div")
        conferenceYear.innerHTML +=`
            <div id="${conference.year}Conference">
                 <p class="conference-year fs-3">Beartooth ${year}</p>
            </div>`
        conferenceYear.className = "conference-year-container"
        pastSpeakersDisplay.append(conferenceYear)
        if (year === "2020") {
            conferenceYear.innerHTML += `
               <p>No Conference</p>`
        } else {
            for (let speaker of conference.speakers) {
                const name = speaker.name
                const homeTown = speaker.homeTown
                const memberOf = speaker.memberOf
                conferenceYear.innerHTML +=`
                    <p>${name}, ${homeTown} (${memberOf})</p>`
            }
        }
    }
}

function generateContactList(){
    const contactList = document.getElementById("contact-list")
    for (let contact of conferenceContacts) {
        const contactName = contact.name
        const contactNumber = contact.number
        contactList.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center text-capitalize py-1 contact-name">
                ${contactName} <span class="contact-number">${contactNumber}</span>
            </li>` 
    }
}

generateSpeakers()
generateContactList()
