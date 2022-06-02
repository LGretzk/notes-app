class NotesApi {
  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(data => callback(data));
  }

  createNote(text, callback) {
    fetch('http://localhost:3000/notes',{
      headers: {'Content-Type': 'application/json'},
      method: "POST",
      body: JSON.stringify({content: text}),
    }).then(response => response.json())
      .then(data => callback(data));
  }
};

module.exports = NotesApi;