// const moment = require('moment');
// alert('eeee');

var uniqueId = function () {
  return (
    "id-" +
    Math.random()
    .toString(36)
    .substr(2, 16)
  );
};
// const createAt = () => {
//   let now = moment();
//   now.minute("YYYY-MM-DD HH:mm");
//   console.log(now);
// }
// bind localStorage saved notes to the obj Notes
let notes = getSavedNotes();

const filters = {
  serachText: ""
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("submit", e => {
  e.preventDefault();
  const id = uniqueId();
  const timestamp = minute();
  notes.push({
    id,
    title: e.target.elements.newNote.value,
    body: e.target.elements.textBody.value,
    createdAt: timestamp,
    updatedAt: 
  });
  renderNotes(notes, filters);
  saveNotes();
  console.log(notes);
});

document.querySelector("#searchTitle").addEventListener("input", e => {
  filters.serachText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#removeAll").addEventListener("click", e => {
  e.preventDefault();
  removeAll();
  renderNotes(notes, filters);
});

window.addEventListener("storage", e => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    saveNotes();
    renderNotes(notes, filters);
  }
});