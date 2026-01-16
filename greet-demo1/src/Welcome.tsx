import Greeting from "./Greet";

interface PersonProps {
        fname:string,
        lname:string

}

const Welcome = (props:PersonProps)=>{

    return(
            <div>
               <h2> Hello, Welcome to React World </h2>
               <h3>{props.fname} </h3>
               <h3>{props.lname} </h3>
              <Greeting name="Radhika" role="Tester" />
            </div>
    )
}

export default Welcome;