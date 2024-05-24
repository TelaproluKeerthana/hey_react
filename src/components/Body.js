import Restaurant_Card from "./Restaurant_Card";
import restaurantList from "../utils/restaurants";
import { useState } from "react";
import Shimmer from "./shimmer";
const Body = () =>
    {
        const [restaurants, setRestaurants]=useState(restaurantList);
        const[searchText,setsearchText]=useState("");
        return(
        <div className="body">  
        <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}/>
            <button onClick={()=>{
                const filteredRestaurant = restaurants.filter((res)=>res.data.name.includes(searchText));
                setRestaurants(filteredRestaurant);
            }}>Search</button>

        </div>
        <div className="filter">
          <button
            className="filter-btn" 
            onClick={()=> {
                const filteredList=restaurants.filter(
                    res => res.data.avgRating >= 4
                );
                setRestaurants(filteredList);
            }} 
            >  
            Top Rated Restaurant
            </button>  
        </div>
        <div className="restaurant-container">
          {restaurants.map((restaurant) => (
          <Restaurant_Card key={restaurant.data.id} resData={restaurant.data}/>
        ))}
        </div>
        </div> 
        );
    }

export default Body;