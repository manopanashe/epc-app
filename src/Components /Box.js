import React from 'react'
import '../App.css'
import styled from 'styled-components';

const StyledBox = styled.div`
background-color: ${(props) => props.backgroundColor || 'black'};
color: ${(props) => props.textColor || 'white'};
padding: ${(props) => props.padding || 'auto'};
width: ${(props) => props.width || 'auto'};
height: ${(props) => props.height || 'auto'};
margin: ${(props) => props.margin || 'auto'};
border: solid 1px white;

`;
const Box = ({children, backgroundColor, color, padding,width, margin, height}) =>{
    return(
        <StyledBox backgroundColor={backgroundColor} color={color} padding={padding} width={width} margin={margin} height={height}>{children}</StyledBox>
    )
}

export default Box;