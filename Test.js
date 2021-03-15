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
            Asthma:   "",
            CardiovascularDisease:  "",
            Chroniclungdisease:  "",           
            Immunesuppression:  "",           
            Metabolicdisease:  "",           
            Neurologicaldisease:  "",           
            Otherdisease:  "",            
            Autoimmunedisease:  "",            
            Obesity:  "",            
            Pregnancy:  "",           
            Renaldisease:  "",            
            Gastrointestinalliverdisease:  "",            
            Hypertension:  "",
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
                        onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                        />
                    Asthma 
                    <br/>
					<br/>
                    <input 
                        type="checkbox"
                        name="Cardiovascular Disease"
                        value={this.state.CardiovascularDisease}
                        onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                        /> 
                    Cardiovascular Disease
                    <br/>
					<br/>					
                     <input 
                        type="checkbox"
                        name="Chronic lung disease"
                        value={this.state.Chroniclungdisease}
                        onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                        />  
                    Chronic lung disease
                    <br/>
					<br/>
                     <input 
                        type="checkbox"
                        name="Immune suppression"
                        value={this.state.Immunesuppression}
                        onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                        />
                    Immune suppression
                    <br/>
					<br/>
                     <input 
                        type="checkbox"
                        name="Metabolic disease"
                        value={this.state.Metabolicdisease}
                        onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                        />  
                    Metabolic disease
                    <br/>
					<br/>
                     <input 
                        type="checkbox"
                        name="Neurological disease"
                        value={this.state.Neurologicaldisease}
                        onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                        />       
                    Neurological disease    
                    <br/> 
					<br/>                                        
                     <input 
                        type="checkbox"
                        name="Other disease"
                        value={this.state.Otherdisease}
                        onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                        />
                    Other disease
                    <br/>
					<br/>
                     <input 
                        type="checkbox"
                        name="Autoimmune disease"
                        value={this.state.Autoimmunedisease}
                        onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                        />
                    Autoimmune disease
                    <br/>
					<br/>
                     <input 
                        type="checkbox"
                        name="Obesity"
                        value={this.state.Obesity}
                        onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                        />
                    Obesity
                    <br/>
					<br/>
                     <input 
                        type="checkbox"
                        name="Pregnancy"
                        value={this.state.Pregnancy}
                        onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                        />
                    Pregnancy
                    <br/>
					<br/>
                     <input 
                        type="checkbox"
                        name="Renal disease"
                        value={this.state.Renaldisease}
                        onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                        />
                    Renal disease
                    <br/>
					<br/>
                     <input 
                        type="checkbox"
                        name="Gastrointestinal/liver disease"
                        value={this.state.Gastrointestinalliverdisease}
                        onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                        /> 
                    Gastrointestinal/liver disease
                    <br/>
					<br/>
                     <input 
                        type="checkbox"
                        name="Hypertension"                      
                        value={this.state.Hypertension}
                        onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
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
