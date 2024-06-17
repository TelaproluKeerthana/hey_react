import { useState } from "react";
const User = (props) =>
    {
        const [count,setCount]=useState(0);
        return(
            <div className="user-card">
                <h1>Count :{count}</h1>
                <h2>Name: {props.name}</h2>
                <h3>Email: keerthanachowdary29@gmail.com</h3>
            </div>
        )
    }

export default User;