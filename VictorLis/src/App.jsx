import "./App.css";
import AllRecipes from "./components/AllRecipes";
import LatestRecipes from "./components/LatestRecipes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <LatestRecipes />
      <AllRecipes />
    </>
  );
}

export default App;
