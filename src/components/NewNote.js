import { useState,useEffect } from "react"
import { makeid } from "../utils/utilsFn"


const NewNote = ({setNotesList,setOpenNewNote,notesList,defaultValue}) =>{
    const [inputValue, setInputValue] = useState("")
    useEffect(()=>{
        if (defaultValue) setInputValue(defaultValue.inputValue)
    },[defaultValue])

const onChangeInput = (e) => {
    setInputValue(e.target.value);
}
const handleSubmit = (e) =>{
    e.preventDefault()
    if(defaultValue){
        setNotesList([...notesList.filter((note)=> note.uid !== defaultValue.uid), {uid:defaultValue.uid,inputValue}]) 
    }else {

        setNotesList((prev)=>[...prev,{inputValue, uid: makeid()}])
    }
    setInputValue("")
    setOpenNewNote(false)
}
    return <form onSubmit={handleSubmit}>
        <div className="inputContainer">

        <label htmlFor="newNote">ADD NEW NOTE</label>
        <textarea cols={25} rows={5} id="newNote" type="text" value={inputValue} onChange={onChangeInput} />
        <button className="button" type="submit" >Submit New Note</button>
        </div>

    </form>
}

export default NewNote