class NotesApi {
  loadNotes(callback, errorCallback) {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => {
        errorCallback();
        console.log(error);
      });
  }

  createNote(text, callback, errorCallback) {
    fetch('http://localhost:3000/notes', {
      headers: {'Content-Type': 'application/json'},
      method: "POST",
      body: JSON.stringify({content: text}),
    }).then(response => response.json())
      .then(data => callback(data))
      .catch(error => {
        errorCallback();
        console.log(error);
      });
  }
};

module.exports = NotesApi;