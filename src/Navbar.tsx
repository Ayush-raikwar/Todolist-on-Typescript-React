import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar(){
    
    
    // const ham:any = document.getElementById('ham')
    // // ham.addEventListener('click', toggleList);
    // console.log(ham);
    

    function toggleList(){
         
        const navUl:any = document.getElementById('nav-ul')
        const sideNav:any = document.querySelector('.sidenav')
        navUl.classList.toggle('show')
        sideNav.classList.toggle('showNav')
    }



    return(
        <div className="sidenav">
            <button onClick={toggleList} className="ham" id="ham">
                <i className="fas fa-bars"></i>
            </button>
            <ul className="nav-ul" id="nav-ul">
                <li><a><Link to="/">Home</Link></a></li>
                <li><a><Link to="/about">About</Link></a></li>
                <li><a><Link to="/contact">Contact</Link></a></li>
            </ul>
        </div>
        
    )
}