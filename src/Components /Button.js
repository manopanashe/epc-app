import React from "react";
import '../App.css';
import styled from 'styled-components';


const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor || 'Black'};
  color: ${(props) => props.textColor || 'white'};
  padding: 10px 20px;
  border: solid 1px white;
  cursor: pointer;
  margin-right: ${(props) => props.marginRight || 'auto'}
 
`;

const Button = ({label, onClick, backgroundColor, textColor, width, className,marginRight}) => {
    return(
        <StyledButton onClick={onClick} backgroundColor={backgroundColor} textColor={textColor} className={className} marginRight={marginRight}>
       
        {label}
         </StyledButton>
    )
}

export default Button;