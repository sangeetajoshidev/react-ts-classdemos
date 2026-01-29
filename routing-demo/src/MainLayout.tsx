import { NavLink, Outlet } from "react-router"

const MainLayout = ()=>{

     return(
      
        <>
           <h1>First Routing Demo</h1>
         <nav>
         <ul>
           <li>
             <NavLink to="/home" >Home</NavLink>
            </li>
            <li>
             <NavLink to="/about" >About</NavLink>
            </li>
            <li>
             <NavLink to="/contact" >Contact</NavLink>
            </li>    
         </ul>
         </nav>
          <main className="container">
            <Outlet />
          </main>
        
        </>

     )

}
export default MainLayout;