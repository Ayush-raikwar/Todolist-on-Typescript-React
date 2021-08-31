import React,{useRef} from 'react';
import Header from '../Header';
import Footer from "../Footer";
import Note from "../Note";
import CreateArea from "../CreateArea";
import { Navbar } from '../Navbar';
import { useState } from 'react';
import { Modal } from '../Modal';
import styled from "styled-components";

export const Todo:React.FC = () =>{

    const popupRef:any = useRef();
    const [notes, setNotes] = useState<any[]>([])
    const [displayModal, setDisplayModal]  = useState<any>(null);

    function addNote(note:any){                           
        setNotes((prevNotes:any):any => {
        return(
            [...prevNotes, note]
        )
        })
        
    }

    function deleteNote(id:any){                          
        setNotes((prevNotes) => {
        return  prevNotes.filter((noteItem, index) =>{
            return index!==id;
            });
        })
    }

    function triggerModal(id:any){ 
        console.log('test trigger');
        const data = notes[id]; 
        setDisplayModal(<Modal updateNote={updateNote} closeModal={closeModal} data={data} id={id}/>);
    }

    function updateNote(id:any,data:any){
        notes[id] = data;
        setNotes(notes)
    }
    
    function closeModal():void{
        setDisplayModal(null);   
    }


   

    


    return(
        <div>
            <Header />
            <Navbar />
         
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem:any,index) => {
                return <Note onEdit={triggerModal} onDelete={deleteNote} title={noteItem.title} content={noteItem.content} id={index} key={index}/>
            })}
            <Footer />
            {
            displayModal
            }
      </div>   
    )
}