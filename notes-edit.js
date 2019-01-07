const notesId = location.hash.substr(1);
const notes2 = getSavedNotes();

const note = notes2.find(note => {
    return note.id === notesId;
});

if(note === undefined){
    location.assign('./index.html');
}

console.log(note.text);

