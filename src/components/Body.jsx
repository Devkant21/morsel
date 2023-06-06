import RestaurantCard from "./RestaurantCard"
import resList from "../utils/data"
const Body = () => {
    return (
        <div>
            {resList.map((restaurant) => (
                <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            ))}
        </div>
    )
}

export default Body