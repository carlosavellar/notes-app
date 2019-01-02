let notes = [];

const filters = {
    searchText: ''
}

const getNote = localStorage.getItem('notes');

if (getNote !== null) {
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
        const ptag = document.createElement('p');

        if (el.title.length > 0) {
            ptag.textContent = el.textContent;
            console.log(el.title);;
        } else {
            console.log();
            ptag.textContent = 'Unnamed title';
        }

        document.querySelector('#notes').appendChild(ptag);
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
button[1].addEventListener('click', (e) => {
    // console.log(e);
    // console.log('Remove all');
    const p = document.querySelectorAll('p');
    p.forEach(el => {
        el.remove();
    });
    notes.forEach(note => note = '');
});

document.querySelector('input').addEventListener('input', e => {
    filters.searchText = e.target.value;
    renderNote(notes, filters);
});