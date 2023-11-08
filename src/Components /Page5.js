import React from 'react'
import Button from './Button';
import Box from './Box'
import '../App.css'

function Page5({resetForm,prevStep}){
    const End = (e) => {
        e.preventDefault();
        resetForm();
      };

      const Previous = (e) => {
        e.preventDefault();
        prevStep();
      };
    return(
        <Box backgroundColor={'black'} width={'700px'} height={'fit-content'} className=' sm:min-w-full md:min-w-full'>
            
              <div className='results'>
              <h2 className='results__title'>Title</h2>
                <div className='results__content resultsBox'>
                     <div className='resultsBox__one resultBoxContent'>
                      
                             <h2 className='resultBoxContent_title'>Title</h2>
                      
                      
                            <p className='resultsBoxContent__description'>
                            Lorem ipsum dolor sit amet, consectetur 
                            </p> 
                    
                    </div>
                    <div className='resultsBox__two' >
                   
                             <h2 className='resultBoxContent_title'>Title</h2>
                            <p className='resultsBoxContent__description'>
                            Lorem ipsum dolor sit amet, consectetur 
                            </p> 
                    </div>
                    <div className='resultsBox__three '>
                       
                             <h2 className='resultBoxContent_title'>Title</h2>
                      
                             <p className='resultsBoxContent__description'>
                            Lorem ipsum dolor sit amet, consectetur 
                            </p> 
                    
                    </div>

                </div>
            
                
                <div className='results__ctaBox'>
                <Button onClick={Previous} label={'Previous'} className='houseType__cta' marginRight={'15rem'}  />
                <Button  onClick={End} label={'Finish'}/>
                </div>
            </div>
        </Box>
    )
}

export default Page5;