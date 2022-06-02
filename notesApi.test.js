const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks();

describe("API class", () => {
  it('calls fetch and loads data', () => {
    const api = new NotesApi;

    fetch.mockResponseOnce(JSON.stringify({
      notes: ['this is a test note']
    }));

    api.loadNotes((data) => {
      expect(data.notes).toEqual(['this is a test note']);
    });
  });

  // xit('createNote function creates a note', () => {
  //   const api = new NotesApi;
  //   let newNote = 'Learn JS';

  //   fetch.mockResponseOnce(JSON.stringify({
  //     note: newNote
  //   }));

  //   api.createNote(newNote, (data) => {
  //     expect(data.note).toEqual(newNote);
  //   });
  // });
});