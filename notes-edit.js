window.addEventListener("storage", e => {
    console.log(e);
    console.log("weww");
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
    note.updatedAt = moment().valueOf();
    saveNotes();
});
bodyTxt.addEventListener("input", e => {
    console.log();
    note.body = e.target.value;
    note.updatedAt = moment().valueOf();
    saveNotes();
});

window.onload = () => {
    setInterval(()=>{
        document.querySelector('.get-time').innerHTML = '';
        let updatingTime = document.querySelector('.get-time');
        updatingTime.textContent = `Last updated in ${moment(note.updatedAt).fromNow()}`;
    }, 1000);
};

window.addEventListener("storage", e => {
    console.log(e);
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
        note.updatedAt = moment();
        const lastUpdate = note.updatedAt.fromNow(note.updatedAt);
        timeUpdated(lastUpdate, ".get-time");
        // renderNotes(notes, filters);
    }
});