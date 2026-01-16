import React from "react"

class ToggleEffect extends React.Component{
    constructor(props){
        super(props)
        this.state={
            flag : true
        }
        this.toggle = this.toggle.bind(this)
    }


     toggle(){
         this.setState({flag:!this.state.flag})
     }  
        


      render(){

        return(
            <div>
                This is a toggle demo 
                <button onClick= {this.toggle} >{this.state.flag ?'On':'Off'}  </button>
            </div>
            )
       }

    }

export default ToggleEffect;