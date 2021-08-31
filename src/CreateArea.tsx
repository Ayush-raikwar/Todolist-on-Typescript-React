import React, { useState } from "react";
import styled from 'styled-components';
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

  const AddButton = styled.button`
    position: absolute;
    right: 18px;
    bottom: -18px;
    background: brown;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    outline: none;

  &:hover{
      border:2px solid rgb(255, 136, 136);
      transition: border 0.05s;
      }
  `;


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

        <AddButton className='add-btn' onClick={submitNote}>Add</AddButton>
        
      </form>
    </div>
  );
}

export default CreateArea;
