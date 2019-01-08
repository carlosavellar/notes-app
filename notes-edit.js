const titleNote = document.getElementById("textNote");
const bodyNote = document.getElementById("textBody");

const id = location.hash.substr(1);
let notes = getSavedNotes();

let note = notes.find(note => {
    return note.id = id;
});

if (note === undefined) {
    location.assign('./index.html');
}

console.log(`${note.title}___`);

titleNote.value = note.title;
bodyNote.value = note.body;


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

window.addEventListener('storage', function (e) {
    console.log(e.storageArea);
    // debugger

    // if (e.key === "notes") {
    //     saveNotes(notes);
    //     notes = getSavedNotes();

    //     note = notes.find(note => {
    //         return note.id = id;
    //     });

    //     if (note === undefined) {
    //         location.assign('./index.html');
    //     }
    //     titleNote.value = note.title;
    //     bodyNote.value = note.body;
    // }
});