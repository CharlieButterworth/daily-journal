
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry---" class="journalEntry">
        <p id="concepts---" class="journalEntry">${entry.concept}</p>
        <p id="journalEntry---" class="journalEntry">${entry.entry}</p>
        <p id="date---" class="journalEntry">${entry.date}</p>
        <p id="mood---" class="journalEntry">${entry.mood}</p>
        </section>
    `
}