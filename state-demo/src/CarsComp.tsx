import { useState } from "react";

const Cars =()=>{

      const [color, setColor] = useState("Blue")
      const[make,setMake] = useState("Merc")

     return (
        <>
        <h3>Color of car {color}</h3>
        <h3>Make of car {make}</h3>
        <button onClick={() => setColor("Red")}>Change Color</button>
        <button onClick={() => setMake("BMW")}>Change Make</button>
        

        </>
     )

}

export default Cars;