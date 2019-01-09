window.addEventListener("storage", e => {
    console.log(e);
    console.log("weww");
    debugger

});
const titleTxt = document.querySelector("#textNote");
const bodyTxt = document.querySelector("#textBody");

let id = location.hash.substr(1);
let notes = getSavedNotes();

let note = notes.find(note => {
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

window.addEventListener("storage", e => {
    console.log(e);
    debugger
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        note = notes.find(note => {
            return note.id === id;
        });

        if (note === undefined) {
            location.assign('./index.html');
        }
        titleTxt.value = note.title;
        bodyTxt.value = note.body;

    }
});