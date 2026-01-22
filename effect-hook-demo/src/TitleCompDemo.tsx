import { useEffect, useState } from "react"

function TitleCompDemo(){
    const [count,setCount]= useState(100);

    useEffect(()=>{
          document.title =`You clicked ${count} times`
    });

   return(

       <div>
        <h2>The button is clicked for {count} times</h2>
        <button onClick={()=>setCount(count + 1)}>increment count</button>

       </div>

   )
 

}

export default TitleCompDemo