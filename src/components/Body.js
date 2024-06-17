import Restaurant_Card,{promotedResCard} from "./Restaurant_Card";
import restaurantList from "../utils/restaurants";
import { useState } from "react";
import Shimmer from "./shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () =>
    {
        const [restaurants, setRestaurants]=useState(restaurantList);
        const[searchText,setsearchText]=useState("");
        const onlinestatus=useOnlineStatus();
        const PromResCard=promotedResCard(Restaurant_Card)
        if(onlinestatus===false){
            return (
                <h1>Looks like you're offline..</h1>
            )
        }
        return(
        <div className="body">  
        <div className="search m-4 p-4 flex items-center">
            <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}/>
            <button
            className="p-4 py-2 bg-green-100 m-4 rounded-xl" onClick={()=>{
                const filteredRestaurant = restaurants.filter((res)=>res.data.name.includes(searchText));
                setRestaurants(filteredRestaurant);
            }}> Search </button>

        
        <div className="filter px-5">
          <button
            className="p-4 py-2 bg-purple-50 rounded-xl" 
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
        </div>
        <div className="flex flex-wrap">
          {restaurants.map((restaurant) => ( 
            restaurant.data.promoted ? (
                <PromResCard resData={restaurant.data} key={restaurant.data.id} />
            ) :(
            <Restaurant_Card resData={restaurant.data}  key={restaurant.data.id}/>
        )
    ))}
        
        </div>
        </div> 
        );
    }

export default Body;