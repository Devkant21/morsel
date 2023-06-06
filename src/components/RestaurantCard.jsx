
const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        name,
        cuisines,
        avgRating,
        costForTwoString,
    } = resData?.data || {};

    return (
        <div className="grid grid-cols-4 gap-4 p-4 m-4">
            <div className="card rounded-xl">
                <img src="https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?size=626&ext=jpg" alt="" />
                <h3>{name}</h3>
                <h4>{cuisines.join(",")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>${costForTwoString / 100} for two</h4>
            </div>
        </div>
    )
}

export default RestaurantCard