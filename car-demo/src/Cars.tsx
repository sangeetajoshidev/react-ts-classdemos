import { Link } from "react-router";
import type { CarData } from "./App"

interface CarProps{
    data:CarData[]
}

const Cars=({data})=>{

    return(
        <div>
       <h2> Cars collection</h2>
       <div >
        {data.map((car)=>(
            <Link 
            key={car.id} 
            to = {`/cars/${car.id}`}
            >
          <img
             src ={car.media}
             alt={car.name}
            />
          <div>
            <h3>{car.name}</h3>
            <p>{car.price}</p>
          </div>

            </Link>
        ))}
       </div>
       </div>
    )


}

export default Cars;