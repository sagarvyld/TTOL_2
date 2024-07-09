import logo from "./logo.svg";
import "./App.css";
import LieRectangel from "./components/LieRectangel";
import WhiteRectangle from "./components/WhiteRectangle";
import PinkReactangle from "./components/PinkReactangle";
import RedRectangel from "./components/RedRectangle";
import SpotPage from "./scenes/SpotPage";

function App() {
  return (
    <div className="App">
      <svg
      className="star-bg1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 27 27"
        fill="none"
      >
        <path
          d="M13.5 27C13.5 19.5437 7.45628 13.5 0 13.5C7.45628 13.5 13.5 7.45628 13.5 0C13.5 7.45628 19.5437 13.5 27 13.5C19.5437 13.5 13.5 19.5437 13.5 27Z"
          fill="#FF9FFC"
        />
      </svg>
      <svg
      className="star-bg2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 27 27"
        fill="none"
      >
        <path
          d="M13.38 26.76C13.38 19.37 7.39 13.38 0 13.38C7.39 13.38 13.38 7.39 13.38 0C13.38 7.39 19.37 13.38 26.76 13.38C19.37 13.38 13.38 19.37 13.38 26.76Z"
          fill="#B398FF"
        />
      </svg>
      <SpotPage/>
    </div>
  );
}

export default App;
