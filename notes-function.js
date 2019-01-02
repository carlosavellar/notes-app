const notesFunction = () =>{
       const getNote = localStorage.getItem('notes');

       if (getNote !== null) {
           return JSON.parse(getNote);
       } else {
           console.log("______ Porra nenhuma");
       }
 
}

// saving the Element
const saveElement = (notes)=>{
     localStorage.setItem('notes', JSON.stringify(notes));
}


renderNodeModule = (el) =>{ 
    const ptag = document.createElement('p');

    if (el.title.length > 0) {
        ptag.textContent = el.textContent;
        console.log(el.title);

    } else {
        console.log();
        ptag.textContent = 'Unnamed title';
    }
    return ptag;
}

const renderNote = (note, filter) => {
    const filterNotes = note.filter(elnote => {
        return elnote.title.toLowerCase().includes(filter.searchText.toLowerCase());
    });

    document.querySelector('#notes').innerHTML = '';

    filterNotes.forEach(el => {
        const ptag = renderNodeModule(el);
        document.querySelector('#notes').appendChild(ptag);
    });
}
