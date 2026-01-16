type GreetProps ={
    name:string;
    role: string;

}

const Greeting = ({name,role}:GreetProps)=>{

    return(
    <div>
        <h3>Hello there, {name}</h3>
        <h2> You have logged in as a {role}</h2>
    </div>
    )

}

export default Greeting;