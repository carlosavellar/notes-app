// Este commit


var uniqueId = function () {
  return (
    "id-" +
    Math.random()
    .toString(36)
    .substr(2, 16)
  );
};

// bind localStorage saved notes to the obj Notes
let notes = getSavedNotes();

const filters = {
  serachText: ""
};

renderNotes(notes, filters);

// event adding news note
document.querySelector("#create-note").addEventListener("submit", e => {
  const id = uniqueId();
  e.preventDefault();
  notes.push({
    id,
    title: e.target.elements.newNote.value,
    body: e.target.elements.textBody.value
  });

  saveNotes(notes);
  renderNotes(notes, filters);
});

document.querySelector("#sort").addEventListener("change", e => {
  console.log(e.target.value);
});

document.querySelector("#removeAll").addEventListener("click", e => {
  removeAll();
});

document.querySelector('#searchTitle').addEventListener("input", e => {
  filters.serachText = e.target.value;
  renderNotes(notes, filters);
});