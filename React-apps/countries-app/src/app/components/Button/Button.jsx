import React from "react";
import  styled  from "styled-components";

export default function Button({content}){
 
    return <StyledButton>{content}</StyledButton>;

}
const StyledButton = styled.button`
background:linear-gradient(to right, #ebebeb, #ffffff 79%);
text-transform: uppercase;
letter-spacing: 0.2rem;
width:65%;
height:3rem;
border:none;
color: #000000;
border-radius: 2rem;
cursor: pointer;

`;