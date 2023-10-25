import React from 'react'
import Button from './Button'
import Box from './Box'
import '../App.css'

function Page3({nextStep,prevStep}){
    const Continue = (e) => {
        e.preventDefault();
        nextStep();
      };

      const Previous = (e) => {
        e.preventDefault();
        prevStep();
      };
    return(
        <Box backgroundColor={'black'} width={'694px'} height={'244px'} className=' sm:min-w-full md:min-w-full'>
             <div className='container my-auto text-center inline-grid'>
            <h1 className='text-3xl pt-2'>Question Title</h1>
            
                <div className=' mt-4 pt-4 pb-3 mb-3 items-center'> 
                    <input
                        type="radio"
                        id={`house`}
                        name="rating"
                        value='Option 1'
                    />
                    <label htmlFor={'house'} className='mr-3'> Option Label</label>
                 
                    
                    <input
                        type="radio"
                        id={`house`}
                        name="rating"
                        value='Option 1'
                    />
                    <label htmlFor={'house'} className='mr-3'> Option Label</label>
                   
                    
                    <input
                        type="radio"
                        id={`house`}
                        name="rating"
                        value='Option 1'
                    />
                    <label htmlFor={'house'}> Option Label</label>
                </div>
                <div className='pb-4 items-center'> 
                    <input
                        type="radio"
                        id={`house`}
                        name="rating"
                        value='Option 1'
                    />
                    <label htmlFor={'house'} className='mr-3'> Option Label</label>
                 
                    
                    <input
                        type="radio"
                        id={`house`}
                        name="rating"
                        value='Option 1'
                    />
                    <label htmlFor={'house'} className='mr-3'> Option Label</label>
                   
                    
                    <input
                        type="radio"
                        id={`house`}
                        name="rating"
                        value='Option 1'
                    />
                    <label htmlFor={'house'}> Option Label</label>
                </div>
                <div className='space-x-96'>
                <Button onClick={Previous} label={'Previous'} className='mr-10 ' />
                <Button  onClick={Continue} label={'Continue'}/>
                </div>
            </div>
        </Box>
    )
}

export default Page3;