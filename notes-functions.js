// getting saved nots from localStorage
// Returning the the parsed JSON content or an empty Array
const getSavedNotes = () => {
    const noteJSON = localStorage.getItem('notes');
    if (noteJSON !== null) {
        return JSON.parse(noteJSON);
    } else {
        return [];
    }
}

const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Removing notes using the ID, and calling whithin the generateDom function
const removeNote = id => {
    const fnote = notes.findIndex(note => note.id === id);
    if (fnote > -1) notes.splice(fnote, 1);
}

// Crete the DOM element and appending to the UI
const generateNoteDom = (note) => {
    const divItem = document.createElement('div');
    const pTag = document.createElement('a');
    pTag.classList.add('d-inline-block');
    const divTxtBody = document.createElement('span');
    const icon = document.createElement('i');
    const btnDel = document.createElement('span');

    // Event Listener removing note
    btnDel.addEventListener('click', (id) => {
        removeNote(note.id);
        saveNotes(notes);
        renderNotes(notes, filters);
    });


    const iconDel = document.createElement('i');
    btnDel.classList.add('del', 'd-inline-block');
    iconDel.classList.add("fas", "fa-times");
    btnDel.appendChild(iconDel);

    divItem.prepend(btnDel);

    icon.classList.add("fas", "fa-calendar-check");
    console.log(note);

    // verifying if the element is empty or note, diferente contente is rendered
    if (note.title.length > 0 || note.body.length > 0) {
        pTag.textContent = note.title;
        pTag.setAttribute("href", `./edit.html#${note.id}`);
        divTxtBody.textContent = note.body;
    } else {
        pTag.textContent = '___';
        divTxtBody.textContent = '___';
    };

    // If both elements are filled out ?  Add on icon
    !!note.title && !!note.body ? divTxtBody.appendChild(icon) : false;
    pTag.appendChild(divTxtBody);
    divItem.appendChild(pTag);

    return divItem;
}

/* Loop through the Object veryfying if the element in the Filters obj
exist whithin notes Objs  */
const renderNotes = (notes, filters) => {
    // debugger
    let filteredNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(filters.serachText.toLowerCase());
    });
    document.querySelector('#notes').innerHTML = '';
    /* 
        Loop trogh the let that contains all Notes
        Creates an constant bind the generateNoteDom 
        function passing the note(forEach) as argument */
    filteredNotes.forEach(note => {
        const generatedDom = generateNoteDom(note);
        document.querySelector('#notes').appendChild(generatedDom);
    });

}

const removeAll = () => {
    notes = [];
    localStorage.clear();
    renderNotes(notes, filters);
}