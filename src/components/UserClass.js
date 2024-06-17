import React from "react";
class UserClass extends React.Component{
    constructor(props){
         console.log("Child constructor")
        super(props)
        this.state={
            count: 0,
            count2: 1
        }
    
    }
    componentDidMount(){
        console.log("child did mount")
     }
        render(){
            const {name,email}=this.props //destruct for ease of writing code
            const {count,count2}=this.state
            console.log("child render")
            return(
                <div className="user-card">
                    <h1>Count :{count2}</h1>
                    <button
                     onClick={()=>{
                        this.setState({
                            count2: this.state.count2+1,
                        });
                    }}>
                        Increment Count</button>
                <h2>Name: {name}</h2>
                <h4>Email: {email}</h4>
            </div>
            )
        }

    }

export default UserClass;