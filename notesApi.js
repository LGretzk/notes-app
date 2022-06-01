class NotesApi {

  loadNotes(callback) {
    fetch('/notes').then(response => response.json())
      .then(data => callback(data));
  }

};

module.exports = NotesApi;