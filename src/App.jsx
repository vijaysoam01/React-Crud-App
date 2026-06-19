import { useEffect, useState } from "react";
import "./App.css";
import Reacthooks from "./Components/Reacthooks";
import Crud from "./Components/Crud";

function App() {

const [count,setCount]=useState(0)

  return (
    <>
    {/* <Reacthooks/> */}
    <Crud/>
    </>
  );
}

export default App;
