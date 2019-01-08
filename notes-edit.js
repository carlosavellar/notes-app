const titleNote = document.getElementById("textNote");
const bodyNote = document.getElementById("textBody");

const id = location.hash.substr(1);
let notes = getSavedNotes();

const note = notes.find(note => {
    return note.id = id;
});

if (note === undefined) {
    location.assign('./index.html');
}

console.log(`${note.title}___`);

document.getElementById("textNote").value = note.title;
document.getElementById("textBody").value = note.body;


titleNote.addEventListener('input', e => {
    note.title = e.target.value;
    saveNotes(notes);
});
bodyNote.addEventListener('input', e => {
    note.body = e.target.value;
    saveNotes(notes);
});

document.querySelector("#remove").addEventListener("click", () => {
    removeNote(id);
    saveNotes(notes);
    location.assign(`./index.html`);
});