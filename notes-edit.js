const titleTxt = document.querySelector("#textNote");
const bodyTxt = document.querySelector("#textBody");

const id = location.hash.substr(1);
const notes = getSavedNotes();

const note = notes.find(note => {
    return note.id === id;
});

if (note === undefined) {
    location.assign('./index.html');
}

titleTxt.value = note.title;
bodyTxt.value = note.body;

titleTxt.addEventListener("input", e => {
    console.log();
    note.title = e.target.value;

    console.log(e.target.value);
    saveNotes();
});