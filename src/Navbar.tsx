import React from 'react';

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
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        
    )
}