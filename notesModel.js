class NotesModel {
  constructor() {
    this.notes = [];
  }

  getNotes() {
    return this.notes;
  }

  setNotes(data) {
    data.forEach(note => this.notes.push(note));
  }

  addNote(text) {
    this.notes.push(text);
  }

  reset() {
    this.notes = [];
  }
}

module.exports = NotesModel;