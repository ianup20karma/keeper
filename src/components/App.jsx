import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
  const [ notesCollection, setNotesCollection ] = useState(notes);
  const addItem = (newItem) => setNotesCollection(preVal => [...preVal, newItem]);
  const deleteItem = (id) => setNotesCollection(notes => notes.filter(item => item.id !== id));

  return (
    <div>
      <Header />
      <CreateArea addItem={addItem} />
      {notesCollection.map((note) => (
        <Note key={note.id} id={note.id} title={note.title} content={note.content} deleteItem={deleteItem}/>
      ))}
      <Footer />
    </div>
  );
}

export default App;
