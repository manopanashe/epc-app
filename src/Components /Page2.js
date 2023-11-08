import React from 'react'
import Box from './Box'
import '../App.css'
import Button from './Button'

function Page2({nextStep,prevStep}){
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
            <div className='houseType'>
            <h2 className='houseType__title '>Question Title</h2>
            
                <div className='houseType__content radBox__item'> 
                    <input
                        type="radio"
                        id={`house`}
                        name="rating"
                        value='Option 1'
                        className='radBox__item'
                    />
                    <label htmlFor={'house'} className='radBox_label'> Option Label</label>
                 
                    
                    <input
                        type="radio"
                        id={`house`}
                        name="rating"
                        value='Option 1'
                        className='radBox__item'
                    />
                    <label htmlFor={'house'} className='mr-3'> Option Label</label>
                   
                    
                    <input
                        type="radio"
                        id={`house`}
                        name="rating"
                        value='Option 1'
                        className='radBox__item'
                    />
                    <label htmlFor={'house'}> Option Label</label>
                </div>
                <div className=''>
                <Button onClick={Previous} label={'Previous'} className='houseType__cta' marginRight={'15rem'} />
                <Button  onClick={Continue} label={'Continue'}/>
                </div>
            </div>
        </Box>
    )
}

export default Page2;