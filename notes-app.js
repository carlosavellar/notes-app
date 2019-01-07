let notes = [];

const filters = {
    titleNote: '',
    compolete: ''
};


let jsonNote = localStorage.getItem('notes');
if (jsonNote !== null) {
    notes = JSON.parse(jsonNote);
}

const renderNotes = (notes, filter) => {
    let filteredNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(filter.titleNote.toLowerCase());
    });

    document.querySelector("#notes").innerHTML = '';
    filteredNotes.forEach(note => {
        
        const noteEl = document.createElement('p');
        if (note.title.length > 0) {
            noteEl.textContent = note.title;
        } else {
            // noteEl.textContent = 'No name';
        }
        document.querySelector("#notes").appendChild(noteEl);
    });
}


renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("submit", (e) => {
    e.preventDefault();
    notes.push({
        title: e.target.elements.newNote.value,
        body: ''
    });
    localStorage.setItem('notes', JSON.stringify(notes));
    
    renderNotes(notes, filters);
});

document.querySelector('#create-note').addEventListener("click", () => {
    renderNotes(notes, filters);
});

document.querySelector("#defaultCheck1").addEventListener("change", (e) => {
    renderNotes(notes, filters);
});

document.querySelector("#searchTitle").addEventListener("input", (e) => {
    e.preventDefault();
    filters.titleNote = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector("#sort").addEventListener("change", e => {
    console.log(e.target.value);
});