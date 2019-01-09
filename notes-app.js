var uniqueId = function () {
  return ("id-" + Math.random().toString(36).substr(2, 16));
};
// bind localStorage saved notes to the obj Notes
let notes = getSavedNotes();

const filters = {
  serachText: ""
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('submit', e => {
  e.preventDefault();
  const id = uniqueId();
  notes.push({
    id,
    title: e.target.elements.newNote.value,
    body: e.target.elements.textBody.value
  });
  renderNotes(notes, filters);
  saveNotes();
});

document.querySelector('#searchTitle').addEventListener('input', e => {
  filters.serachText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#removeAll").addEventListener('click', (e) => {
  e.preventDefault();
  removeAll();
  renderNotes(notes, filters);
});