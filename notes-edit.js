const id = location.hash.substr(1);
let notes = getSavedNotes();

const indexNote = notes.find(note => {
    return note.id = id;
});

console.log(indexNote);
if (indexNote === undefined) {
    location.assign('./index.html');
}

const titleTxt = document.querySelector("#text-note");
const boodyTxt = document.querySelector("#text-body");

titleTxt.value = indexNote.title;
boodyTxt.value = indexNote.body;

titleTxt.addEventListener("input", e => {
    notes.title = e.target.value;
    saveNotes(notes);

});