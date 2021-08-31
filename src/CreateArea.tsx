import React, { useState } from "react";

interface Types{
  title:string;
  content:string
}
const defaultType ={
  title:'',
  content:''
}
function CreateArea(props:any) {
  const [note, setNote] = useState<Types>(defaultType);

  function handleChange(e:any) {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(e:any) {
    if(note.title=='' && note.content==''){
      alert('Enter Something!');
    } else{
      props.onAdd(note);

    }
    e.preventDefault();
    setNote({
      title:'',
      content:''
    })
  }

  return (
    <div id='cA'>
      <form>
        <input id='create-area'
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={note.title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          value={note.content}
          
        />
        <button className='add-btn' onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
