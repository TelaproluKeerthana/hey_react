import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
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

const AppLayout = () =>
    {   
        return(<div className="App">
            <Header/>
            <Body/>
             </div>);
    }
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
