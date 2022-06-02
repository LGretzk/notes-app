class NotesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    this.mainContainerEl = document.querySelector('#main-container');

    this.addNoteButton = document.querySelector('#add-note-button');
    this.addNoteInput = document.querySelector('#add-note-input');

    this.addNoteButton.addEventListener('click', () => {
      this.addNote(this.addNoteInput.value);
      this.addNoteInput.value = "";
    });
  }

  // addNote(text) {
  //   this.model.addNote(text);
  //   this.displayNotes();
  // }

  displayNotes() {
    // this.mainContainerEl.innerHTML = "";
    document.querySelectorAll('.note').forEach(element => element.remove());

    const notes = this.model.getNotes();

    notes.forEach(note => {
      const noteEl = document.createElement("div");
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    });
  }

  displayNotesFromApi() {
    this.api.loadNotes((data) => {
      this.model.setNotes(data.notes);
      this.displayNotes();
    });
  }

  addNote(text) {
    this.api.createNote(text, (data) => {
      this.model.addNote(data.content);
      this.displayNotes();
    });
  }
};

module.exports = NotesView;