const NotesView = require('./notesView');
const NotesModel = require('./notesModel');
const NotesApi = require('./notesApi');

console.log('The notes app is running');

const model = new NotesModel;
const api = new NotesApi;
const view = new NotesView(model, api);

console.log(model.getNotes());

view.displayNotesFromApi();
