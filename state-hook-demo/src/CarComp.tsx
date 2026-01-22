import { useState } from "react";

const Cars = ()=>{

        const [color,setColor]=useState("Blue")
        const[make,setMake]=useState("Merc")

        return(
                  <div>
                   <h2>Color of the car {color}</h2>
                   <h2>Make of the car {make}</h2>
                   <button onClick={()=>setColor("Grey")}>Change Color</button>
                   <button onClick={()=>setMake("BMW")}>Change Make</button>
                   </div>

        )


}

export default Cars;
