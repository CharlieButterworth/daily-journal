// create entry form HTML with inputs and render to DOM
// add a click event for when user clicks the submit button
// submit should grab values from form inputs, build new note object, and POST that note to the API

import { saveEntry } from "./JournalDataProvider.js"
import { saveNote } from "./NotesProvider.js"




const contentTarget = document.querySelector(".journalEntry--container")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
        <input id="entry--date" type="date"/>
        <input id="entry--mood" type="text" placeholder="Your Name Here"/>
        <input id="entry--concept" type="text" placeholder="Suspect Name"/>
        <textarea id="entry--entry" placeholder="Your Note Here"></textarea>
        <button id="saveNote">Save Note</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveNote") {
        const date = document.querySelector("#entry--date")
        const entry = document.querySelector("#entry--mood")
        const mood = document.querySelector("#entry--concept")
        const concept = document.querySelector("#entry--entry")
        

        // new object here

        const newEntry = {
            date,
            entry,
            mood,
            concept,
        }

        saveEntry(newEntry)
    }
}

)