var uniqueId = function () {
    return 'id-' + Math.random().toString(36).substr(2, 16);
};

let notes = [];

const filters = {
    searchText: ''
}

const getNote = localStorage.getItem('notes');

if (getNote !== null) {
    console.log(getNote);
    notes = JSON.parse(getNote);
} else {
    console.log("______ Porra nenhuma");
}

const renderNote = (note, filter) => {
    const filterNotes = note.filter(elnote => {
        return elnote.title.toLowerCase().includes(filter.searchText.toLowerCase());
    });

    document.querySelector('#notes').innerHTML = '';

    filterNotes.forEach(el => {
        const ptag = document.createElement('div');
        const nodeText = document.createElement('span');
        const btn = document.createElement('button');
        btn.textContent = 'x';
        
        ptag.appendChild(btn);
        if (el.title.length > 0) {
            nodeText.textContent = el.textContent;
            console.log(el.title);;
        } else {
            console.log();
            nodeText.textContent = 'Unnamed title';
        }
        document.querySelector('#notes').appendChild(ptag);
        ptag.appendChild(nodeText);
        
        return ptag;
    });
}


renderNote(notes, filters);
const button = document.querySelectorAll('button');

button[0].addEventListener('click', (e) => {

    notes.push({
        title: '',
        body: ''
    });
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNote(notes, filters);

});
document.getElementById("removeAll").addEventListener("click", e => {
  // console.log(e);
  // console.log('Remove all');
  
  const divNotes = document.querySelectorAll('#notes div');
  divNotes.forEach(el => {
    el.remove();
  });
  notes = [];
  localStorage.removeItem("notes");
  console.log(notes);
});

document.querySelector('input').addEventListener('input', e => {
    filters.searchText = e.target.value;
    renderNote(notes, filters);
});