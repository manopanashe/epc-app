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
             <div className='rooms '>
            <h2 className='rooms__title '>Question Title</h2>
            
                <div className='rooms__setOne roomRadBox'> 
                    <input
                        type="radio"
                        id={` numberofBedrooms`}
                        name="rating"
                        value='Option 1'
                    />
                    <label htmlFor={' numberofBedrooms'} className='roomRadBox__item'> Option Label</label>
                 
                    
                    <input
                        type="radio"
                        id={` numberofBedrooms`}
                        name="rating"
                        value='Option 1'
                       
                    />
                    <label htmlFor={' numberofBedrooms'}  className='roomRadBox__item'> Option Label</label>
                   
                    
                    <input
                        type="radio"
                        id={` numberofBedrooms`}
                        name="rating"
                        value='Option 1'
                  
                    />
                    <label htmlFor={' numberofBedrooms'}> Option Label</label>
                </div>
                <div className='rooms__setTwo roomRadBo'> 
                    <input
                        type="radio"
                        id={` numberofBedrooms`}
                        name="rating"
                        value='Option 1'
                  
                    />
                    <label htmlFor={' numberofBedrooms'}  className='roomRadBox__item'> Option Label</label>
                    
                    <input
                        type="radio"
                        id={` numberofBedrooms`}
                        name="rating"
                        value='Option 1'
                     
                    />
                    <label htmlFor={' numberofBedrooms'}  className='roomRadBox__item'> Option Label</label>
                   
                    
                    <input
                        type="radio"
                        id={` numberofBedrooms`}
                        name="rating"
                        value='Option 1'
                        
                    />
                    <label htmlFor={' numberofBedrooms'}> Option Label</label>
                </div>
                <div >
                <Button onClick={Previous} label={'Previous'} className='houseType__cta' marginRight={'15rem'}  />
                <Button  onClick={Continue} label={'Continue'}/>
                </div>
            </div>
        </Box>
    )
}

export default Page3;