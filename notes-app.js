let notes = [{
        title: "Carlson",
        body: "Body calrson"
    },
    {
        title: "isa",
        body: "Body calrson"
    },
    {
        title: "Loso",
        body: "Body calrson"
    }
];

const filters = {
    serachText: ''
};

const noteJSON = localStorage.getItem('notes');
if(noteJSON !== null){
    notes = JSON.parse(noteJSON);
}

const renderNotes = (notes, filters) => {
    let filteredNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(filters.serachText.toLowerCase());
    });
    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(note => {
        const pTag = document.createElement('p');
        const divTxtBody = document.createElement('span');
        const icon = document.createElement('i');
        icon.classList.add("fas", "fa-calendar-check");
        
        if(note.title.length > 0){
            pTag.textContent = note.title;
            divTxtBody.textContent = note.body;
        }else{
            pTag.textContent = '___';
            divTxtBody.textContent = '___';
        }

        !!note.title && !!note.body ? divTxtBody.appendChild(icon) : false;

        document.querySelector('#notes').appendChild(pTag);

        pTag.appendChild(divTxtBody);
        
       
    });
    // console.log(textBody);
}

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
    localStorage.setItem('notes', JSON.stringify(notes));

    renderNotes(notes, filters);
});

document.querySelector("#sort").addEventListener("change", e=>{
    console.log(e.target.value);
});