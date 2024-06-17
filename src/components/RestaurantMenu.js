import { useEffect,useState } from "react";
import { json } from "react-router-dom";
import Shimmer from "./shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () =>{
        
        resInfo=useRestaurantMenu()
        if (resInfo === null) {
    return <Shimmer />;
}
 const {name,cuisines,costForTwo,avgRating}=resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info;
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(',')}</h2>
            <h3>{costForTwo}</h3>
            <h5>menu</h5>
            <ul>
                <li>Burgers</li>
                <li>Snacks</li>
                <li>Drinks</li>
            </ul>
        </div>
        );
    };

export default RestaurantMenu;