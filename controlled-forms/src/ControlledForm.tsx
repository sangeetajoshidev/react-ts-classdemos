import { useState } from "react";

const ControlledForm = ()=>{

    const[name,setName] = useState<string>('')

    const handleSubmit= (e:React.FormEvent)=>{

        e.preventDefault();
        alert(`Name:${name}`)

    }

    return(
   
         <form onSubmit={handleSubmit}>

              <h3>Controlled form</h3>
     
              <div>
                <label>Name</label>
                <input value={name} onChange = {e=>setName(e.target.value)} placeholder="Enter your name" />
                 {name}
              </div>
              <button type="submit">Submit</button>


         </form>

    )

}

export default ControlledForm;