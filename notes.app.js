const notes = [
    {
        title: "Love me tender",
        body: "I think its gonna rain"
    },
    {
        title: "Deth metal ",
        body: "Napalm Death Show"
    },
    {
        title: "Everything JS",
        body: "Understand any JS framework just by looking at it"
    }
];

const filters = {
    searchText: ''    
}

const renderNote = (note, filter) =>{
    const filterNotes = note.filter(elnote=>{
        return elnote.title.toLowerCase().includes(filter.searchText.toLowerCase());
    });

    document.querySelector('#notes').innerHTML = '';

    filterNotes.forEach(el=>{
        const ptag = document.createElement('p');
        ptag.textContent = el.title;
        document.querySelector('#notes').appendChild(ptag);
    });


}



renderNote(notes, filters);
const button = document.querySelectorAll('button');

button[0].addEventListener('click', (e)=>{
    console.log(e);
    console.log('Create note');
    e.target.textContent = 'Button Was Clicked';

});
button[1].addEventListener('click', (e)=>{
    console.log(e);
    console.log('Remove all');
});

document.querySelector('input').addEventListener('input', e=>{
    filters.searchText = e.target.value;
    renderNote(notes, filters);
});