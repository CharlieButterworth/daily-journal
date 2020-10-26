/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.


const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("entryStateChanged", {
        detail: {
            content: null
        }
    })
    eventHub.dispatchEvent(entryStateChangedEvent)
}




const journal = []


/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) => Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}







let journalEntry = []

export const getEntries = () => {
   
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(parsedEntries => {
                journalEntry = parsedEntries
            // What should happen when we finally have the array?
        })
}





export const journalEntries = () => {
    return journalEntry.slice()
}

console.log('JOURNAL ENTRY', journalEntries)







export const saveEntry = (entry) => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}

console.log('here is the entry', getEntries)
