const NotesModel  = require('./notesModel');

describe ('NotesModel', () => {
  it('returns an empty array', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);

  });

  it('adds the note', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    expect(model.getNotes()).toEqual(['Buy milk']);
  });

  it('resets the notes', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.reset();
    expect(model.getNotes()).toEqual([]);
  })
});