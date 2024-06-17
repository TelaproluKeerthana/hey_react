const Restaurant_Card =(props) =>{
    const{resData}=props;
    const { name,cuisines, avgRating, costForTwoString} = resData || {}; 
    return (
<div className="m-4 p-4 w-[250px] flex-wrap" style={{ backgroundColor: "#f0f0f0" }}>
<img className="rounded-lg" alt="res-logo" src="https://st.depositphotos.com/3147737/4982/i/950/depositphotos_49826787-stock-photo-hyderabadi-biryani-a-popular-chicken.jpg" />
<h3 className="font-bold py-2">{name}</h3>
<h4>{cuisines?.join(', ')}</h4>
<h4>{avgRating}</h4>
<h4>{costForTwoString}</h4>
</div>
);
}

export const promotedResCard = (Restaurant_Card) =>{
    return(props)=>{
       return (
        <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-md">promoted</label>
            <Restaurant_Card {...props}/>
        </div>
       )
    }
}

export default Restaurant_Card;