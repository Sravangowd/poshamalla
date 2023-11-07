import React from "react";
class Car extends React.Component{
    constructor(props){
        super(props);
        this.state={
            brand:"KIA",model:"New",Colour:"White",year:"2022"
        };
          
    }
    changeColour = () =>{
        this.setState({Colour:"red"});
        console.log(this.state)
    }                
    render(){
        return(
            <div>
                <h1>This is {this.state.brand}</h1>
                <p>This is a brand {this.state.model} ,    
                  {this.state.Colour}, 
                                      {this.state.brand} car realesd this year {this.state.year}</p>
                 <h2>This is sravan goud poshamalla</h2> 
                <button onClick={this.changeColour}>changeColour</button>
            </div>
        )
    }

}
export default  Car