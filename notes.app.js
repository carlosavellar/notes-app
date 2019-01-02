let notes = notesFunction();

const filters = {
    searchText: ''    
}

renderNote(notes, filters);

const button = document.querySelectorAll('button');

button[0].addEventListener('click', (e)=>{

    renderNote(notes, filters);
    notes.push({
        title: '',
        body: ''
    });
   saveElement(notes);

    
});
button[1].addEventListener('click', (e)=>{
    // console.log(e);
    // console.log('Remove all');
    const p = document.querySelectorAll('p');
    p.forEach(el=>{
        el.remove(); 
    });
    notes.forEach(note => note = '');
});

document.querySelector('input').addEventListener('input', e=>{
    filters.searchText = e.target.value;
    renderNote(notes, filters);
});