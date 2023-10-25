import React,{Component} from 'react'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import CustomPage from './CustomPage'

export default class Mainform extends Component{
    state ={
        step: 1,
        propertyType:'',
        numberofBedrooms:'',
        rating:'',
    }

     // go back to previous step
     prevStep = () => {
        const { step } = this.state;
      
        if (step === 'custom') {
          // If you're on the custom form, go back to the "Rating" page
          this.setState({ step: 4 });
        } else if (step > 1) {
          this.setState({ step: step - 1 });
        }
      };
      
      
    // proceed to the next step
  nextStep = () => {
      const { step } = this.state;
      this.setState({ step: step + 1 });
    }
  
    // handle field change
    
    handleChange = (input) => (e) => {
      if (input === 'rating') {
        // For the 'rating' field, update the state directly
        this.setState({ rating: e.target.value });
      } else {
        // For other input fields, update the state as before
        this.setState({ [input]: e.target.value });
      }
    };
    

    resetForm = () => {
      this.setState({
        step: 1, // Reset the step to the first page
        // Reset other form data properties to initial values
        
      });
    
    };
    goToCustomForm = () => {
      this.setState({ step: 'custom' });
    };
    render(){
        const { step } = this.state;
const {  propertyType,  numberofBedrooms, rating} = this.state;
const values = {  propertyType,  numberofBedrooms, rating}
switch (step) {
    case 1: 
      return (
        <Page1
        nextStep={this.nextStep}
        handleChange={this.handleChange}
        values={values}
        />
      )
    case 2: 
      return (
        <Page2
        prevStep={this.prevStep}
        nextStep={this.nextStep}
        handleChange={this.handleChange}
        values={values}
        />
      )
    case 3: 
      return (
        <Page3
        prevStep={this.prevStep}
        nextStep={this.nextStep}
        handleChange={this.handleChange}
        values={values}

        />
      )
      case 4: 
      return (
        <Page4
        prevStep={this.prevStep}
        nextStep={this.nextStep}
        handleChange={this.handleChange}
        goToCustomForm={this.goToCustomForm} 
        values={values}
       
        />
      )
    case 'custom':
    return(
      <CustomPage  
      prevStep={this.prevStep}/>
    )
    // never forget the default case, otherwise VS code would be mad!
    default: 
       // do nothing
      
  }

        }
}