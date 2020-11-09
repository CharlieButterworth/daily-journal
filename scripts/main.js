


import { getEntries, journalEntries, saveEntry, useJournalEntries } from "./JournalDataProvider.js";
import { JournalEntryComponent } from "./JournalEntry.js";
import { EntryListComponent } from "./JournalEntryList.js";
import { JournalForm } from "./JournalForm.js";


EntryListComponent();
getEntries()
.then(() => {

    JournalEntryComponent()
})

journalEntries()
JournalForm()
saveEntry()
useJournalEntries()