import { useNavigate, useParams } from "react-router";
import type { CarData } from "./App";

interface CarDetailProps {
    data: CarData[];
}

const CarDetails= ({data})=>{

  const {id} =useParams<{id:string}>();

  const navigate = useNavigate();
  

  const car = data.find(car=>car.id === Number(id))
  if(!car){
    return (
        <div>
    <h1>Car not found</h1>
    <button onClick={()=> navigate('/cars')}>
        Back to cars
    </button>
    
      </div>
     );

  }
  return(
    <div>
        <h1>{car.name}</h1>
        <div>
            <img src= {car.media} alt={car.name}/>
        </div>
        <div>{car.price}</div>
        <ul>
           <li> Make {car.make}</li>
           <li> Make {car.model}</li>
           <li> Make {car.year}</li>
        </ul>
    </div>
  )

}

export default CarDetails;