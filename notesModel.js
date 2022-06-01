class NotesModel {
  constructor() {
    this.notes = [];
  }

  getNotes() {
    return this.notes;
  }

  setNotes(data) {
    this.notes = data;
  }

  addNote(text) {
    this.notes.push(text);
  }

  reset() {
    this.notes = [];
  }
}

module.exports = NotesModel;