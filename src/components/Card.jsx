import { resList } from "../utils/data";
const Card = (props) => {
    const { resList } = props;
    return (
        <div className="grid grid-cols-4 gap-4 p-4 m-4">
            <div className="card rounded-xl">
                <img src="https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?size=626&ext=jpg" alt="" />
                <h3>{resList.data.name}</h3>
                <h4>{resList.data.cuisine.join(",")}</h4>
                <h4>{resList.data.costForTwoString / 100}</h4>
            </div>
            <div>
                {
                    resList.map((restaurant, index) => (
                        <Card key={restaurant.data.id} resList={restaurant} />
                    ))}

            </div>


        </div>
    )
}

export default Card