import React from "react";
import '../App.css';
import styled from 'styled-components';


const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor || 'Black'};
  color: ${(props) => props.textColor || 'white'};
  padding: 10px 20px;
  border: solid 1px white;
  cursor: pointer;
  
 
`;

const Button = ({label, onClick, backgroundColor, textColor, width}) => {
    return(
        <StyledButton onClick={onClick} backgroundColor={backgroundColor} textColor={textColor} >
       
        {label}
         </StyledButton>
    )
}

export default Button;