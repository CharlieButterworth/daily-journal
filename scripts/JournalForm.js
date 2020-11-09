// // create entry form HTML with inputs and render to DOM
// // add a click event for when user clicks the submit button
// // submit should grab values from form inputs, build new note object, and POST that note to the API

import { getEntries, saveEntry } from "./JournalDataProvider.js"
import "./JournalEntry.js"





const contentTarget = document.querySelector(".entry--container")
const eventHub = document.querySelector(".container")


// Has to be something here

const render = (entryObj) => {
    // debugger
    // console.log("EntryOBJ", entryObj)
    contentTarget.innerHTML = `
     <section id="entry--" class="journalEntry">
     <p id="entry--concept" class="journalEntry">${entryObj.concept}</p>
     <p id="entry--entry" class="journalEntry">${entryObj.entry}</p>
     <p id="entry--date" class="journalEntry">${entryObj.date}</p>
     <p id="entry--mood" class="journalEntry">${entryObj.mood}</p>
     </section>
 `
 }


eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.id === "journalButton") {
        console.log("button clicked", eventHub)
        const date = document.querySelector("#entry--date").value
        const entry = document.querySelector("#entry--entry").value
        const mood = document.querySelector("#entry--mood").value
        const concept = document.querySelector("#entry--concept").value
        

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
// console.log(newEntry)


export const JournalForm = () => {
    getEntries
    .then (
        render()

    )
    


}
