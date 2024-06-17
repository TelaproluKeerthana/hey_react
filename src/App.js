import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
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
            <Outlet/>
             </div>);
    }

const appRouter = createBrowserRouter(
    [
        {
         path:'/',
         element:<AppLayout />,
         children: [
        
        {
         path:'/about',
         element:<About />,
        },
        {
            path:'/contact',
            element:<Contact />,
        },
        {
            path: '/',
            element:<Body/>
        },
        {
           path: '/restaurants/:resId',
           element:<RestaurantMenu />
        },
    ],
    errorElement:<Error/>
}
    ]
);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
