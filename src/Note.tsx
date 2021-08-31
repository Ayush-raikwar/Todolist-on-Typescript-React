import React from "react";
import styled from 'styled-components';
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


  const Button = styled.button`
    color: palevioletred;
    position:relative;
    font-size: 0.8em;
    margin: 1em;
    float:right;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    cursor: pointer;
    height: 34px;
    
  `;
   
   
    // margin-right: 10px;
  
    // border: none;
    // width: 36px;
    // outline: none;

  const TomatoButton = styled(Button)`
      color: tomato;
      border-color: tomato;
    `;



  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {/* <button id="edit" onClick={editContent}>EDIT</button> */}
      {/* <button id="delete" onClick={handleClick}>DELETE</button> */}
      <TomatoButton id="edit" onClick={editContent}>EDIT</TomatoButton>
      <TomatoButton id="delete" onClick={handleClick}>DELETE</TomatoButton>
      
    </div>
  );
}

export default Note;
