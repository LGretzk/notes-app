class NotesApi {

  loadNotes(callback) {
    fetch('http://localhost:3000/notes', {mode: 'no-cors'}).then(response => response.json())
      .then(data => callback(data)); // returns {notes: ['this is a test note']}
  }

  // createNote(newNote, callback) {
  //   fetch('http://localhost:3000/notes', 
  //   {
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     method: "POST",
  //     body: JSON.stringify({content: 'Test post request'}),
  //     mode: 'no-cors'
  //   }).then(response => response.json()).then(data => console.log(data));
  // }

};

module.exports = NotesApi;