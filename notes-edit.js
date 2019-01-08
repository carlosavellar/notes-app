const titleNote = document.getElementById("textNote");
const bodyNote = document.getElementById("textBody");
const id = location.hash.substr(1);
let notes = getSavedNotes();

const indexNote = notes.find(note => {
    return note.id = id;
});

if (indexNote === undefined) {
    location.assign('./index.html');
}

console.log(`${indexNote.title}___`);

document.getElementById("textNote").value = indexNote.title;
document.getElementById("textBody").value = indexNote.body;


document.getElementById("textNote").addEventListener('change', e => {
    notes.title = e.target.value;
    saveNotes(notes);

});