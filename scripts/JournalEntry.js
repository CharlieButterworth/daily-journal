// import "./JournalForm.js"


export const JournalEntryComponent = (entryObj) => {
    return `
        <section id="entry---" class="journalEntry">
        <p id="entry---concepts" class="journalEntry">${entryObj.concept}</p>
        <p id="entry---journalEntry" class="journalEntry">${entryObj.entry}</p>
        <p id="entry---date" class="journalEntry">${entryObj.date}</p>
        <p id="entry---mood" class="journalEntry">${entryObj.mood}</p>
        </section>
    `
}

console.log("JOURANLENTRYCOMPONET", JournalEntryComponent)