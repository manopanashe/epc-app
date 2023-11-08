import React from 'react'
import Button from './Button';
import Box from './Box'
import '../App.css'

function Page4({nextStep,prevStep}){
    const Continue = (e) => {
        e.preventDefault();
        nextStep();
      };

      const Previous = (e) => {
        e.preventDefault();
        prevStep();
      };
    return(
        <Box backgroundColor={'black'} width={'694px'} height={'344px'} className=' sm:min-w-full md:min-w-full'>
              <div className='ratings'>
            <h2 className='ratings__title '>Question Title</h2>
            
                <div className='ratings__setOne ratingsRadBox'> 
                    <input
                        type="radio"
                        id={`house`}
                        name="rating"
                        value='Option 1'
                    />
                    <label htmlFor={'house'} className='ratingsRadBox_item'> Option Label</label>
                 
                    
                    <input
                        type="radio"
                        id={`house`}
                        name="rating"
                        value='Option 1'
                    />
                    <label htmlFor={'house'} > Option Label</label>
                </div>
                <div className='ratings__setTwo  ratingsRadBox'> 
                    <input
                        type="radio"
                        id={`house`}
                        name="rating"
                        value='Option 1'
                    />
                    <label htmlFor={'house'} className='ratingsRadBox_item'> Option Label</label>
                 
                    
                    <input
                        type="radio"
                        id={`house`}
                        name="rating"
                        value='Option 1'
                    />
                    <label htmlFor={'house'} className=''> Option Label</label>
                </div>
                <div className='ratings__setThree ratingsRadBox'> 
                    <input
                        type="radio"
                        id={`house`}
                        name="rating"
                        value='Option 1'
                    />
                    <label htmlFor={'house'} className='ratingsRadBox_item'> Option Label</label>
                 
                    
                    <input
                        type="radio"
                        id={`house`}
                        name="rating"
                        value='Option 1'
                    />
                    <label htmlFor={'house'} className=''> Option Label</label>
                </div>
                <div className='ratings__setFour ratingsRadBox'> 
                    <input
                        type="radio"
                        id={`house`}
                        name="rating"
                        value='Option 1'
                    />
                    <label htmlFor={'house'} className='ratingsRadBox_item'> Option Label</label>
                 
                    
                    <input
                        type="radio"
                        id={`house`}
                        name="rating"
                        value='Option 1'
                    />
                    <label htmlFor={'house'} className=''> Option Label</label>
                </div>
                <div className='ratings__ctaBox'>
                <Button onClick={Previous} label={'Previous'} className='houseType__cta' marginRight={'15rem'}  />
                <Button  onClick={Continue} label={'Continue'}/>
                </div>
            </div>
        </Box>
    )
}

export default Page4;