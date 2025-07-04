import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import CoinDetails from "./components/Coindetails";
import Footer from "./components/Footer";



// BrowserRouter-	Enables routing in your React app
// as Router -	Just a shortcut/alias to write less
// Routes -	Container for all your app routes
// Route -	Defines which component should load for which path (URL)



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
