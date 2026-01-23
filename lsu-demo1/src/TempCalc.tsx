import { useState } from "react"
import { TempInput } from "./TempInput"



type BoilingVerdictProp = {
    temp:number
}
export const BoilingVerdict = ({temp}:BoilingVerdictProp)=>
    
    {

     return(
         <p>
        { temp >= 100 ?
            "Water will boil"
            : "Water will not boil"

        }
        </p> 
     )

}


export const TempCalc =()=>{

     const[temp,setTemp] = useState<number>(0);
     
     const handleTemp = (value:number)=>{
        setTemp(value)
     }


      return(

              <div>
              <h2>Enter the temp</h2>
              <TempInput onTempChange={handleTemp} ></TempInput>

              <BoilingVerdict  temp={temp} />

              </div>


      )







}



