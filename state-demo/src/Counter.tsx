import React from "react";

class CounterComp extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            counter1:0,
               
        }
        this.increment = this.increment.bind(this)
    }

    increment(){
        this.setState({counter:this.state.counter + 1})
    }

    render(){
         return(
             <div>
             <h2>  {this.state.counter} </h2>
             <button onClick = {this.increment}>Increment</button>
             </div>
         )
    }
           
}

export default CounterComp;