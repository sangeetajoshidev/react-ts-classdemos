type tempprops={
    temp:number
}

const BoilingVerdict = ({temp}:tempprops)=>{

      if(temp >= 100)
        return <h3>Water will boil</h3>
      else
        return <h3> Water will not boil</h3>
}

export default BoilingVerdict;