import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LandingPage from "./Pages/LandingPage";
import PortfolioInterface from "./Pages/PortfolioInterface";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <>
      <Router>
        <div className="w-full h-screen mx-auto overflow-hidden">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Inventory" element={<PortfolioInterface />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
