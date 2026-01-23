
type TempInputProps = {
    onTempChange:(value:number)=> void;
}

export const TempInput = ({onTempChange}:TempInputProps )=>{

  const  handleChange= (event: React.ChangeEvent): void =>{
        const value = Number(event.target.value);
        onTempChange(value);

    };

       return(
          
           <input type="number" placeholder="Enter temp"  onChange={handleChange} />

       )

}