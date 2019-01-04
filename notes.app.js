var uniqueId = function () {
    return 'id-' + Math.random().toString(36).substr(2, 16);
};

let notes = [];

const filters = {
    searchText: ''
}

const getSavedNotes = () => {
    const getNote = localStorage.getItem('notes'); 
    if (getNote !== null) {
        notes = JSON.parse(getNote);
    } else {
        console.log("______ Porra nenhuma");
    }
    return notes;
}
getSavedNotes();

const removeNode = (id) =>{
     const findNode = notes.findIndex(()=>{
       return notes.id = id;
     });

     console.log(findNode);
 
     if(findNode > -1){
        notes.splice(findNode, 1);
        // localStorage.removeItem("findNode");
        renderNote(notes, filters);
     }

}

const renderNote = (note, filter) => {
    const filterNotes = note.filter(elnote => {
        return elnote.title.toLowerCase().includes(filter.searchText.toLowerCase());
    });

    document.querySelector('#notes').innerHTML = '';

    filterNotes.forEach(el => {
        const ptag = document.createElement('div');
        const nodeText = document.createElement('a');
        const btn = document.createElement('button');
        btn.textContent = 'x';
        btn.addEventListener('click', ()=>{
            removeNode(el.id);
        });
        ptag.appendChild(btn);
        if (el.title.length > 0) {
            nodeText.textContent = el.textContent;
            console.log(el.title);;
        } else {
            nodeText.textContent = 'Unnamed title';
        }
        nodeText.setAttribute('href',`edit.html#${uniqueId()}`);
        document.querySelector('#notes').appendChild(ptag);
        ptag.appendChild(nodeText);
        
        return ptag;
    });
}


renderNote(notes, filters);
const button = document.querySelectorAll('button');

button[0].addEventListener('click', (e) => {
    const id = uniqueId();
    notes.push({
        id,
        title: '',
        body: ''
    });
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNote(notes, filters);
    location.assign(`edit.html#${id}`);

});
document.getElementById("removeAll").addEventListener("click", e => {
  
  const divNotes = document.querySelectorAll('#notes div');
  divNotes.forEach(el => {
    el.remove();
  });
  notes = [];
  localStorage.removeItem("notes");
});

document.querySelector('input').addEventListener('input', e => {
    filters.searchText = e.target.value;
    renderNote(notes, filters);
});