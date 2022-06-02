const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks();

describe("API class", () => {
  it('calls fetch and loads data', () => {
    const api = new NotesApi;

    fetch.mockResponseOnce(JSON.stringify({
      notes: ['this is a test note']
    }));

    api.loadNotes((returnedData) => {
      expect(returnedData.notes).toEqual(['this is a test note']);
    });
  });

  it('creates a new note', () => {
    const api = new NotesApi;

    fetch.mockResponseOnce(JSON.stringify({
      content: 'new note'
    }));

    api.createNote('new note', (data) => {
      expect(data.content).toBe('new note')
    });
  });
});