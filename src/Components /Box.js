import React from 'react'
import '../App.css'
import styled from 'styled-components';

const Box = ({children}) =>{
    return(
        <div className='main_content'>{children}</div>
    )
}

export default Box;