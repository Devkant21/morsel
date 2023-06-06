import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import resList from "./utils/data";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        {resList.map((restaurant, index) => (
          <Card key={index} resList={restaurant} />
        ))}

      </div>
      <Footer />
    </div>
  )

}

export default App;
