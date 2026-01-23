import { useRef } from "react";

const UncontrolledForm = ()=>{

    const nameRef = useRef(null)
   
    const handleSubmit= (e:React.FormEvent)=>{
        e.preventDefault();
        alert(`Name: ${nameRef.current?.value}`);

    }


     return(

      <form onSubmit={handleSubmit}>

          <h3> Uncontrolled Form</h3>

          <div>
            <label>Name</label>
            <input   ref={nameRef} placeholder="Enter name"></input>
          </div>
           
          <button type="submit">Submit</button>

      </form>

     )



}

export default UncontrolledForm;