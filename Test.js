import React, {Component} from 'react'
import {inputButtons} from '../components/inputButtons'
import {Button} from '../components/Button.js'
import '../components/Test.css'; 

class Test extends Component  {
	
	constructor() {
        super()
        this.state = {
            Age: "",
            Gender: "",
            Ethnicity: "",
            Asthma:  true,
            CardiovascularDisease: true,
            Chroniclungdisease: true,           
            Immunesuppression: true,           
            Metabolicdisease: true,           
            Neurologicaldisease: true,           
            Otherdisease: true,            
            Autoimmunedisease: true,            
            Obesity: true,            
            Pregnancy: true,           
            Renaldisease: true,            
            Gastrointestinalliverdisease: true,            
            Hypertension: true,
            ReturnedData: {}
        }
        this.handleChange = this.handleChange.bind(this)
    }
	
	componentDidMount() {
        fetch(" ")
            .then(response => response.json())
            .then(response => {
                const {data} = response.data
                this.setState({  ReturnedData: data })
            })
    }

	handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        alert('A form was submitted: ' + this.state);
    
        fetch('https://your-node-server-here.com/api/endpoint', {
            method: 'POST',
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state)
          }).then(function(response) {
            console.log(response)
            return response.json();
          });
    
        event.preventDefault();
    }
	
	//const [button, setButton] = useState(true);
     render(){  
	//const handleClick = () => setClick(!click);
	return (
		<div className='home'>
			<div className='item'> 
			<h1>Please Enter your information</h1>
			<form onSubmit={this.handleSubmit}>
				{/* {inputButtons.map((item) => {
				return (
					<>
					{item.title}
					<br/>
					<input type={item.type} 
					       width={item.width} 
						   className={item.cName} 
						   placeholder={item.place}
						    />
					<br/>
					</>
					);
				})} */}
 
                    <input 
                        type="text"
                        name="Age"
                        placeholder="Age"
                        value={this.state.Age}
                        onChange={this.handleChange}
                    /> 
                    <br/>
                    <input 
                        type="text"
                        name="Gender"
                        placeholder="Gender"
                        value={this.state.Gender}
                        onChange={this.handleChange}
                    /> 
                    <br/>
                     <input 
                        type="text"
                        name="Ethnicity"
                        placeholder="Ethnicity"
                        value={this.state.Ethnicity}
                        onChange={this.handleChange}
                        />
                        <br/>

                    <input 
                        type="checkbox"
                        className ="checkbox"
                        name="Asthma" 
                        value={this.state.Asthma}
                        onChange={this.handleChange} 
 
                         
                    /> 
                    Asthma 
                    <br/>
					<br/>
                    <input 
                        type="checkbox"
                        name="Cardiovascular Disease"
                        value={this.state.CardiovascularDisease}
                        onChange={this.handleChange}                       
 
                    />   
                    Cardiovascular Disease
                    <br/>
					<br/>					
                     <input 
                        type="checkbox"
                        name="Chronic lung disease"
                        value={this.state.Chroniclungdisease}
                        onChange={this.handleChange}                        
                    />  
                    Chronic lung disease
                    <br/>
					<br/>
                     <input 
                        type="checkbox"
                        name="Immune suppression"
                        value={this.state.Immunesuppression}
                        onChange={this.handleChange}                       
 
                    /> 
                    Immune suppression
                    <br/>
					<br/>
                     <input 
                        type="checkbox"
                        name="Metabolic disease"
                        value={this.state.Metabolicdisease}
                        onChange={this.handleChange}                       
 
                    />    
                    Metabolic disease
                    <br/>
					<br/>
                     <input 
                        type="checkbox"
                        name="Neurological disease"
                        value={this.state.Neurologicaldisease}
                        onChange={this.handleChange}                         
 
                    />         
                    Neurological disease    
                    <br/> 
					<br/>                                        
                     <input 
                        type="checkbox"
                        name="Other disease"
                        value={this.state.Otherdisease}
                        onChange={this.handleChange}                        
 
                    />  
                    Other disease
                    <br/>
					<br/>
                     <input 
                        type="checkbox"
                        name="Autoimmune disease"
                        value={this.state.Autoimmunedisease}
                        onChange={this.handleChange}                      
 
                    /> 
                    Autoimmune disease
                    <br/>
					<br/>
                     <input 
                        type="checkbox"
                        name="Obesity"
                        value={this.state.Obesity}
                        onChange={this.handleChange} 
                    /> 
                    Obesity
                    <br/>
					<br/>
                     <input 
                        type="checkbox"
                        name="Pregnancy"
                        value={this.state.Pregnancy}
                        onChange={this.handleChange}                   
 
                    />  
                    Pregnancy
                    <br/>
					<br/>
                     <input 
                        type="checkbox"
                        name="Renal disease"
                        value={this.state.Renaldisease}
                        onChange={this.handleChange}                        
 
                    /> 
                    Renal disease
                    <br/>
					<br/>
                     <input 
                        type="checkbox"
                        name="Gastrointestinal/liver disease"
                        value={this.state.Gastrointestinalliverdisease}
                        onChange={this.handleChange}                        
 
                    /> 
                    Gastrointestinal/liver disease
                    <br/>
					<br/>
                     <input 
                        type="checkbox"
                        name="Hypertension"                      
                        value={this.state.Hypertension}
                        onChange={this.handleChange} 
                    />       
                    Hypertension    
                    <br/> 
                    {/* <button onClick={this.submit}  >Go</button> */}
				{/* <Button buttonStyle='btn--outline'   >Go</Button> */}
                <input type ="submit" value = "Submit"/>
              </form>
			</div>

		</div>
	)
}
}
export default Test;