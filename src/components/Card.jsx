import { useState } from "react"

const Card = () => {
    const [info, setInfo] = useState("0")
    return (
        <div className="grid grid-cols-4 gap-4 p-4 m-4">
            <div className="card rounded-xl">
                <img src="https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?size=626&ext=jpg" alt="" />
                <h3>Restaurant Name</h3>
                <h4>Biryani, Kebab</h4>
                <h4>$50 for two</h4>
            </div>
            <div className="card rounded-xl">
                <img src="https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?size=626&ext=jpg" alt="" />
                <h3>Restaurant Name</h3>
                <h4>Biryani, Kebab</h4>
                <h4>$50 for two</h4>
            </div>
            <div className="card rounded-xl">
                <img src="https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?size=626&ext=jpg" alt="" />
                <h3>Restaurant Name</h3>
                <h4>Biryani, Kebab</h4>
                <h4>$50 for two</h4>
            </div>
            <div className="card rounded-xl">
                <img src="https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?size=626&ext=jpg" alt="" />
                <h3>Restaurant Name</h3>
                <h4>Biryani, Kebab</h4>
                <h4>$50 for two</h4>
            </div>
            <div className="card rounded-xl">
                <img src="https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?size=626&ext=jpg" alt="" />
                <h3>Restaurant Name</h3>
                <h4>Biryani, Kebab</h4>
                <h4>$50 for two</h4>
            </div>
            <div className="card rounded-xl">
                <img src="https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?size=626&ext=jpg" alt="" />
                <h3>Restaurant Name</h3>
                <h4>Biryani, Kebab</h4>
                <h4>$50 for two</h4>
            </div>
            <div className="card rounded-xl">
                <img src="https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?size=626&ext=jpg" alt="" />
                <div className="p-4 m-5">
                    <h3>Restaurant Name</h3>
                    <h4>Biryani, Kebab</h4>
                    <h4>$50 for two</h4>
                </div>
            </div>
            <div className="card rounded-xl">
                <img src="https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?size=626&ext=jpg" alt="" />
                <h3>Restaurant Name</h3>
                <h4>Biryani, Kebab</h4>
                <h4>$50 for two</h4>
            </div>


        </div>
    )
}

export default Card