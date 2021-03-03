import React, {Component} from "react"

class Textfields extends Component {
    constructor() {
        super()
        this.state = {
            Age: "",
            Gender: "",
 
            ReturnedData: []
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    componentDidMount() {
        fetch(" ")
            .then(response => response.json())
            .then(response => {
                const {data} = response.data
                this.setState({ ReturnedData: data })
            })
    }
    
    /**
     * Create the onChagne handler method
     * It should update the corresponding state on every change of the input box
     */
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }
    
    render() {
        return (
            <div>
                <form className="meme-form">
                    <input 
                        type="text"
                        name="Age"
                        placeholder="Age"
                        value={this.state.Age}
                        onChange={this.handleChange}
                    /> 
                    <input 
                        type="text"
                        name="Gender"
                        placeholder="Gender"
                        value={this.state.Gender}
                        onChange={this.handleChange}
                    /> 
                     <input 
                        type="text"
                        name="Ethnicity"
                        placeholder="Ethnicity"
                        value={this.state.Ethnicity}
                        onChange={this.handleChange}
                    /> 
                    <input 
                        type="text"
                        name="Asthma"
                        placeholder="Asthma"
                        value={this.state.Asthma}
                        onChange={this.handleChange}
                    />   
                    <input 
                        type="text"
                        name="Cardiovascular Disease"
                        placeholder="Cardiovascular Disease"
                        value={this.state.CardiovascularDisease}
                        onChange={this.handleChange}
                    />   
                     <input 
                        type="text"
                        name="Chronic lung disease"
                        placeholder="Chronic lung disease"
                        value={this.state.Chroniclungdisease}
                        onChange={this.handleChange}
                    />  
                     <input 
                        type="text"
                        name="Immune suppression"
                        placeholder="Immune suppression"
                        value={this.state.Immunesuppression}
                        onChange={this.handleChange}
                    /> 
                     <input 
                        type="text"
                        name="Metabolic disease"
                        placeholder="Metabolic disease"
                        value={this.state.Metabolicdisease}
                        onChange={this.handleChange}
                    />    
                     <input 
                        type="text"
                        name="Neurological disease"
                        placeholder="Neurological disease"
                        value={this.state.Neurologicaldisease}
                        onChange={this.handleChange}
                    />                                                      
                     <input 
                        type="text"
                        name="Other disease"
                        placeholder="Other disease"
                        value={this.state.Otherdisease}
                        onChange={this.handleChange}
                    />  
                     <input 
                        type="text"
                        name="Autoimmune disease"
                        placeholder="Autoimmune disease"
                        value={this.state.Autoimmunedisease}
                        onChange={this.handleChange}
                    /> 
                     <input 
                        type="text"
                        name="Obesity"
                        placeholder="Obesity"
                        value={this.state.Obesity}
                        onChange={this.handleChange}
                    /> 
                     <input 
                        type="text"
                        name="Pregnancy"
                        placeholder="Pregnancy"
                        value={this.state.Pregnancy}
                        onChange={this.handleChange}
                    />  
                     <input 
                        type="text"
                        name="Renal disease"
                        placeholder="Renal disease"
                        value={this.state.Renaldisease}
                        onChange={this.handleChange}
                    /> 
                     <input 
                        type="text"
                        name="Gastrointestinal/liver disease"
                        placeholder="Gastrointestinal/liver disease"
                        value={this.state.Gastrointestinalliverdisease}
                        onChange={this.handleChange}
                    /> 
                     <input 
                        type="text"
                        name="Hypertension"
                        placeholder="Hypertension"
                        value={this.state.Hypertension}
                        onChange={this.handleChange}
                    />                                                                                                                    
                    <button>Go</button>
                </form>
            </div>
        )
    }
}

export default Textfields
    
 

 
 
