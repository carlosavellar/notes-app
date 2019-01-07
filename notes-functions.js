const getSavedNotes = ()=> {
    const noteJSON = localStorage.getItem('notes');
    if (noteJSON !== null) {
        notes = JSON.parse(noteJSON);
    }
}

const saveNotes = () =>{
    localStorage.setItem('notes', JSON.stringify(notes));
}

const generateNoteDom = (note) =>{
   const pTag = document.createElement('p');
   const divTxtBody = document.createElement('span');
   const icon = document.createElement('i');
   icon.classList.add("fas", "fa-calendar-check");

   if (note.title.length > 0) {
       pTag.textContent = note.title;
       divTxtBody.textContent = note.body;
   } else {
       pTag.textContent = '___';
       divTxtBody.textContent = '___';
   }

   !!note.title && !!note.body ? divTxtBody.appendChild(icon) : false;

   pTag.appendChild(divTxtBody);

   return pTag;
}

const renderNotes = (notes, filters) => {
    let filteredNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(filters.serachText.toLowerCase());
    });
    document.querySelector('#notes').innerHTML = '';
    filteredNotes.forEach(note => {
        const generatedDom = generateNoteDom(note);
        document.querySelector('#notes').appendChild(generatedDom);
    });
}

const removeAll = () =>{
    notes = [];
    localStorage.clear();
    renderNotes(notes, filters);
} 