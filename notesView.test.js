/**
  * @jest-environment jsdom
*/

const fs = require('fs');
const View = require('./notesView');
const Model = require('./notesModel');
const Api = require('./notesApi');
require('jest-fetch-mock').enableMocks();

describe('Page view', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  xit('displays no notes at the startup', () => {
    const model = new Model;
    const view = new View(model);
    expect(document.querySelector('#main-container').innerText).toBe('');
  });

  xit('displayes a note', () => {
    const model = new Model;
    const view = new View(model);

    model.addNote('Buy bread');
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
  });

  xit('adds a note', () => {
    const model = new Model;
    const view = new View(model);

    const inputEl = document.querySelector('#add-note-input');
    const buttonEl = document.querySelector('#add-note-button');
    
    inputEl.value = "Buy bread";
    buttonEl.click();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelector('div.note').innerText).toBe("Buy bread");
  });

  xit('displays the correct number of notes without repetition', () => {
    const model = new Model;
    const api = new Api;
    const view = new View(model, api);

    const inputEl = document.querySelector('#add-note-input');
    const buttonEl = document.querySelector('#add-note-button');
    
    inputEl.value = "Buy bread";
    // buttonEl.click();
    // inputEl.value = "Buy milk";
    // buttonEl.click();
    view.addNote("Buy bread");

    // expect(document.querySelectorAll('div.note').length).toEqual(2);
    // expect(document.querySelectorAll('div.note')[0].innerText).toBe("Buy bread");
  });

  it('calls api.createNote() when Add note is clicked', () => {
    const model = new Model;
    const api = new Api;
    const view = new View(model, api);
    // const inputEl = document.querySelector('#add-note-input');
    // const buttonEl = document.querySelector('#add-note-button');
    // inputEl.value = "Buy bread";
    // buttonEl.click();

    fetch.mockResponseOnce(JSON.stringify({content: 'Buy bread'}));

    view.addNote("Buy bread", (returnedData) => {
      expect(returnedData.content).toEqual('Buy bread');
    });
  });

  // it('displays error message', () => {
  //   const model = new Model;
  //   const api = new Api;
  //   const view = new View(model, api);
  //   let error = "Oops, something went wrong!"

  //   fetch.mockResponseOnce(error);

  //   view.addNote("Buy bread", (returnedData) => {
  //     expect(returnedData.content).toEqual(error);
  //   });
  // });

  it('displays notes from the NotesApi', () => {
    const model = new Model;
    const api = new Api;
    const view = new View(model, api);

    fetch.mockResponseOnce(JSON.stringify({
      notes: ['this is a test note', 'other']
    }));

    view.displayNotesFromApi((returnedData) => {
      expect(returnedData.notes).toEqual(['this is a test note', 'other']);
    });
  });

  xit('tests the real API', () => {
    const model = new Model;
    const api = new Api;
    const view = new View(model, api);

    view.displayNotesFromApi();
    expect(model.getNotes()).toBe(["This note is coming from the server","Another one"])
  });

});