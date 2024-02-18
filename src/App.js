import './App.css';
import { useState } from 'react';
import NewNote from './components/NewNote';

function App() {
  const [openNewNote,setOpenNewNote] = useState(false)
  const [notesList, setNotesList] = useState([])
  const [defaultValue, setDefaultValue] = useState(null)

  const addNewNote = () => {
    setOpenNewNote(!openNewNote)
  }
  const handleDelete = (uid) =>{
    setNotesList(notesList.filter((note)=>note.uid !== uid))
  }
  const handleEdit = (uid) =>{
    setDefaultValue(notesList.find((note)=>note.uid === uid))
    setOpenNewNote(true)
  }
console.log("notesList",notesList);
  return (
    <main className="App">
      <button onClick={addNewNote} className='plusButton'>+</button>
      {!openNewNote ? 
      <div className='notesListContainer'>
        {notesList.map((note)=><div className='note' key={note.uid}>
          <div>{note.inputValue}</div>
          <div className='editors'>

          <div onClick={()=>handleDelete(note.uid)}>X</div>
          <div onClick={()=>handleEdit(note.uid)}>EDIT</div>
          </div>
          </div>)}
      </div> : 
      <div className='newNoteContainer'>
        <NewNote notesList={notesList} setNotesList={setNotesList} setOpenNewNote={setOpenNewNote} defaultValue={defaultValue} />
        </div>}
    </main>
  );
}

export default App;
