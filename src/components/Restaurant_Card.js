const Restaurant_Card =(props) =>{
    const{resData}=props;
    const { name,cuisines, avgRating, costForTwoString} = resData || {}; 
    return (
<div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
<img className="res-logo" alt="res-logo" src="https://st.depositphotos.com/3147737/4982/i/950/depositphotos_49826787-stock-photo-hyderabadi-biryani-a-popular-chicken.jpg" />
<h3>{name}</h3>
<h4>{cuisines?.join(',')}</h4>
<h4>{avgRating}</h4>
<h4>{costForTwoString}</h4>
</div>
);
}

export default Restaurant_Card;