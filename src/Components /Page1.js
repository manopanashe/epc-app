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
        <Box backgroundColor={'black'} width={'694px'} height={'244px'}>
            <div className='grid grid-cols-2'>
                <div className='text-center container py-10'>
                    <h1 className=' text-4xl pb-2'>Form Title</h1>
                    <Button label={'Button Title'} onClick={Continue}/>
                </div>
                <div className="container mx-auto">
                    <img src='https://fakeimg.pl/400x280?text=Placeholder+Image'></img>
                </div>
            </div>
        </Box>
    )
}

export default Page1;