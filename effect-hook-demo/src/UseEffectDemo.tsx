import { useEffect, useState } from "react";

const UseEffectDemo = ()=>{
const[seconds,setSeconds]=useState(0);

useEffect(()=>{
    const timer = setInterval(()=>{
          
           setSeconds(s=>s+1);
    },1000);

    return  () => clearInterval(timer);}
   ,[]);

   return <p>Seconds passed: {seconds}</p>
};

export default UseEffectDemo;