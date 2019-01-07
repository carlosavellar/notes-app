let notes = []; 
const filters = { serachText: '' };

getSavedNotes();

renderNotes(notes, filters);

document.querySelector("#searchTitle").addEventListener('input', e => {
    filters.serachText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector("#create-note").addEventListener('submit', e => {
    e.preventDefault();
    notes.push({
        title: e.target.elements.newNote.value,
        body: e.target.elements.textBody.value
    });
    notes.push({
        title:'',
        body: ''
    });
    saveNotes();
    renderNotes(notes, filters);
});

document.querySelector("#sort").addEventListener("change", e=>{
    console.log(e.target.value);
});

document.querySelector('#removeAll').addEventListener("click", e => {
    removeAll();
});