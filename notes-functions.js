const getSavedNotes = () => {
    const noteJson = localStorage.getItem('notes');
    if (noteJson) {
        return JSON.parse(noteJson);
    } else {
        return [];
    }
}

const saveNotes = () => {
    localStorage.setItem('notes', JSON.stringify(notes));
}

const removeAll = () => {
    notes = [];
    localStorage.clear();
}

const removeNote = (id) => {
    const indexNote = notes.findIndex((note) => {
        return note.id === id;
    });
    if (indexNote > -1) {
        notes.splice(indexNote, 1);
    }
}

const generateNoteDom = (note) => {
    let divItem = document.createElement('div');
    let itemLink = document.createElement('a');
    let span = document.createElement('span');
    let delBtn = document.createElement('button');
    delBtn.setAttribute("type", "button");
    delBtn.classList.add("close");
    let spanClose = document.createElement("span");
    spanClose.setAttribute("aria-hidden", "true");
    spanClose.textContent = "x";
    delBtn.appendChild(spanClose);
    delBtn.classList.add("float-left", "del");
    delBtn.addEventListener('click', () => {
        removeNote(note.id);
        renderNotes(notes, filters);
    });
    itemLink.setAttribute("href", `./edit.html#${note.id}`);

    if (note.title.length > 0 || note.body.length > 0) {
        itemLink.textContent = note.title ? note.title : '__|_/';;
        span.textContent = note.body ? note.body : '__|_/';
    }

    divItem.appendChild(delBtn);
    itemLink.appendChild(span);
    divItem.appendChild(itemLink);

    document.querySelector("#notes").appendChild(divItem);
}

const lastEdited = (notes, sortedBy) => {
    if (sortedBy === 'lastEdited') {
        return notes.sort((a, b)=>{
            if(a.updatedAt > b.updatedAt){
                return -1;
            }else if(a.updatedAt < b.updatedAt){
                return 1;
            }else{
                return 0;
            } 
        });
    }else if(sortedBy === 'lastCreated'){
        return notes.sort((a,b)=>{
            if(a.createdAt > b.createdAt ){
                return -1;
            }else if(a.createdAt < b.createdAt){
                return 1;
            }else{
                return 0;
            }
        });
    }else if(sortedBy === 'sortAlphabetcly'){
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1;
            } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1;
            } else {
                return 0;
            }
        });
    }else{
        return notes;
    }
}

const renderNotes = (notes, filters) => {
    window.r = notes;
    notes = lastEdited(notes, filters.sortedBy);
    let filteredNote = notes.filter(note => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });
    document.querySelector('#notes').innerHTML = '';

    filteredNote.forEach(note => {
        generateNoteDom(note);
    });
}


const updateTimeStamp = (timestamp) =>{
    return `Last updated in ${moment(timestamp).fromNow()}`;
}
