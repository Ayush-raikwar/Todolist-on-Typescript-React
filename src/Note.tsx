import React from "react";
 interface DType{
   title:string;
   content:string
 }

function Note(props:any) {
  
  function handleClick(id:any){
    props.onDelete(props.id)
  }

  function editContent(id:any){
    props.onEdit(props.id)
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button id="edit" onClick={editContent}>EDIT</button>
      <button id="delete" onClick={handleClick}>DELETE</button>
      
    </div>
  );
}

export default Note;
