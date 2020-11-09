import "./JournalForm.js"


export const JournalEntryComponent = (entries) => {
    return `
        <section id="entry---" class="journalEntry">
        <p id="entry---concepts" class="journalEntry">${entries.concept}</p>
        <p id="entry---journalEntry" class="journalEntry">${entryObj.entry}</p>
        <p id="entry---date" class="journalEntry">${entryObj.date}</p>
        <p id="entry---mood" class="journalEntry">${entryObj.mood}</p>
        </section>
    `
}

console.log("JOURANLENTRYCOMPONET", JournalEntryComponent)