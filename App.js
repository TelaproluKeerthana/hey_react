import React from "react";
import ReactDOM from "react-dom";
// const heading= React.createElement('h1',{id:"heading"},"Hey React By Sunny")
// const jsx_heading= (
// <h1 id="heading" className="new_react" tabIndex="5">React by JSX</h1>
// );
// const Heading_comp = () => {
//     return <h1>React Functional Component</h1>
// }
// const NewComposition = () => (
//     <div id="container">
//         <Heading_comp/>
//         <h1 className="newcomp">It's Composition inside Composition</h1>
//     </div>
// );
const Header = () => 
{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/68218/optimized_product_thumb_stage.jpg" />
            </div>
            <div className="navigation_items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    );
}
const Restaurant_Card =(props)=>
{
    return(
  <div className="restaurant-card" style ={{ backgroundColor: "#f0f0f0"}}>
    <img className="res-logo" alt= "res-logo" src= "https://st.depositphotos.com/3147737/4982/i/950/depositphotos_49826787-stock-photo-hyderabadi-biryani-a-popular-chicken.jpg"/>
  <h3>{props.resname}</h3>
   <h4>{props.cuisine}</h4>
   <h4>{props.rating}</h4>
   <h4>{props.deliver_time}</h4>
  </div>

    );
};
const Body = () =>
    {
        return(
        <div className="body">   
        <div className="search">Search</div>
        <div className="restaurant-container">
          <Restaurant_Card resname="Sunn Yumm Food" cuisine="South Indian Cuistine, Asian" rating="5 stars" deliver_time="38 mins"/>
          <Restaurant_Card resname="KFC" cuisine="American" rating="3 stars" deliver_time="8 mins"/>
          <Restaurant_Card resname="Foodie's peace" cuisine="Indian Cuistine, Asian" rating="5 stars" deliver_time="58 mins"/>
        </div>
        </div> 
        );
    }
const AppLayout = () =>
    {   
        return(<div className="App">
            <Header/>
            <Body/>
             </div>);
    }
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
