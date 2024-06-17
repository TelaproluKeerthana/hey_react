import { useState,useEffect } from "react";
import { json } from "react-router-dom";

const useRestaurantMenu =()=>{
    useEffect(() => {
        fetchMenu();
    },[]);
    const[resInfo,setResInfo]=useState(null)
    const fetchMenu=async()=>{
        const data=await fetch('https://sun-server-1.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING');
        const json=await data.json();
        setResInfo(json.data)

    }
    return(
        resInfo
    )
}

export default useRestaurantMenu;
