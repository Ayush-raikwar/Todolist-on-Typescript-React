import React, { useState,MouseEventHandler } from 'react';

export function Modal(props:{closeModal:any,data:{title:string,content:string},id:any,updateNote:any}){
    const [modalValues,setModalValues] = useState<any>(props.data);
    // let modalBg:any = document.getElementById('modal-bg')
    // modalBg.classList.add('bg-active')
    return(
        <div className="modal-bg" id='modal-bg'>
            <div className="modal">
                <h2>Edit the Entry :</h2>
                <label htmlFor="name">Title :</label>
                <input type="text" value={modalValues.title} onChange={(e)=> setModalValues({...modalValues,title:e.target.value})} name="title"></input>
                <label htmlFor="email">Content :</label>
                <input type="text"  value={modalValues.content} onChange={(e)=> setModalValues({...modalValues,content:e.target.value})} name="content"></input>
                <button onClick={() => {
                    props.updateNote(props.id,modalValues);
                    props.closeModal();
                }}>Done</button>
                <span className="modal-close" onClick={props.closeModal}>x</span>
            </div>
         </div>
    )
}   
//  let modalBg:any = document.querySelector('.modal-bg')
// modalBg.classList.toggle('bg-active')