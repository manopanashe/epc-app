import React from 'react'
import Box from './Box'
import '../App.css'
import Button from './Button'

function Page1 ({nextStep}){
    const Continue = e => {
        e.preventDefault();
           nextStep() 
    }
    return(
        <Box  className='main_container'>
            <div className='content'>
                <div className='content__body context'>
                    <h2 className='context__title' >Form Title</h2>
                    <Button label={'Button Title'} onClick={Continue}/>
                </div>
                <div className="content__media ">
                    <picture>
                    <img src='https://fakeimg.pl/359x264?text=Placeholder+Image'></img>
                    </picture>
                   
                </div>
            </div>
        </Box>
    )
}

export default Page1;