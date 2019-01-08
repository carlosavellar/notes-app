var uniqueId = function () {
    return 'id-' + Math.random().toString(36).substr(2, 16);
};

let notes = []; 
const filters = { serachText: '' };

getSavedNotes();

renderNotes(notes, filters);

document.querySelector("#searchTitle").addEventListener('input', e => {
    filters.serachText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector("#create-note").addEventListener('submit', e => {
    const id = uniqueId();
    e.preventDefault();
    console.log(notes);
    notes.push({
        title: e.target.elements.newNote.value,
        body: e.target.elements.textBody.value,
        id
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

document.querySelector('.del').addEventListener("click", node =>{
     
     
});