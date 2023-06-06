import "./index.css";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import RestaurantCard from "./components/RestaurantCard";
import Footer from "./components/Footer";
import Body from "./components/Body";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Body />
      <RestaurantCard />
      <Footer />
    </div>
  )
}

export default App;
