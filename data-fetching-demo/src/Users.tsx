import { useEffect, useState } from "react";

type User = {
    id:number,
    name: string,
    email : string
}
const Users= ()=>{
   const [users,setUsers] = useState<User []>([]);
   const[loading,setLoading] = useState<boolean>(true);
   const[error,setError] =useState<string|null>(null);

   const[idInput,setIdInput] = useState("");

  
      const fetchUsers = async ()=>{

           try{
                 const response = await fetch(
                    'https://jsonplaceholder.typicode.com/users'
                 );
                 if(!response.ok){
                    throw new Error("Unable to fetch users")
                 }

                const data :User[] = await response.json();
                console.log(data)
                setUsers(data)
           }  catch(err) {
                 setError((err as Error).message);
           } finally{
             setLoading(false)
           }
         }
        useEffect(()=>{fetchUsers();},[]);
       

        // fetch user by id
      const fetchUserById = async ()=>{
        if (!idInput) return alert("Enter id");
          setLoading(true);
        
          try{

             const res = await fetch(
                 `https://jsonplaceholder.typicode.com/users/${idInput}`
             );

             if(!res.ok) throw new Error("User not found")
            
            const data :User = await res.json();
            setUsers([data]);
            
          }catch (err){
            alert((err as Error).message);
          }
          finally{

            setLoading(false)
          }
         
      };

      return(
        <div>

               <h3>User CRUD operations</h3>

               <button onClick = {fetchUsers}>Fetch all users</button>
               
               <input type="number" value= {idInput} onChange ={(e)=>setIdInput(e.target.value)} ></input>

               <button onClick = {()=>fetchUserById()} >Fetch user by id</button>

        </div>
      )






}
export default Users;