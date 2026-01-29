import { Link } from "react-router"


const MainLayout = ()=>{
    return(
        <div>
        <h3>Main layout</h3>
        <Link to="/" >Main</Link>
        <Link to="/cars">Cars</Link>
        
        <Link to="/home" >Home</Link>
       
        <Link to="/about" >About</Link>
       
        </div>

    )
}
export default MainLayout