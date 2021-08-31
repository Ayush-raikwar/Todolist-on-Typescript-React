import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Navbar } from '../Navbar';
import styled from 'styled-components';

export const About:React.FC = () => {

    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
        
        &:hover{
            color:red;
            border:red 2px;
            
        }
    `;


const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  position:absolute;
  width:100%;
  top:10%;
  z-index:-1;
`;



 


    return(
        <div>
            <Header />
            <Navbar />
            <Footer />
            <Wrapper>
            <Title>
                This is a Styled Component... really.
            </Title>
            </Wrapper>
            
        </div>
    )
}