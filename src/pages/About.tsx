import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Navbar } from '../Navbar';
export const About:React.FC = () => {
    return(
        <div>
            <Header />
            <Navbar />
            <Footer />
            <h1>About</h1>
            <p>Hello World!</p>
        </div>
    )
}