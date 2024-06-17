import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component{
   constructor (props){
      super(props)
      console.log("Parent Constructor")
   }
   componentDidMount(){
      console.log("parent did mount")
   }
   render(){
      console.log("Parent render")
   return (
   <div>
    <h1>Welcome to the about Page of my app</h1>
    {/* <User name={'Sunny from funccomp'}/> */}
    <UserClass name={"Apple from class"} email={'apple@gmail.com'} />
   </div>
   
   ) 
   }
};

export default About;