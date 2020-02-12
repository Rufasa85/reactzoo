import React, { useState, useEffect } from 'react';
import ZooList from "./components/ZooList";
import axios from "axios"
import API from "./utils/API"

function App() {
  const [animals, setAnimals] = useState([]);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    API.getAllAnimals().then(res=>{
      setAnimals(res.data)
    })
  }, [reset])

 
  function showByClassName(className){
    API.getAllByClass(className).then(res=>{
      setAnimals(res.data)
    })
  }

  // function otherShowClass(event)  {
  //   const className= event.target.getAttribute("data-className");
  //   console.log(className, event.target);
  //   API.getAllByClass(className).then(res=>{
  //     setAnimals(res.data)
  //   })
  // }

  function resetListBtn () {
    setReset(!reset);
  }

  return (
    <div>
      <h1>Zoo App!</h1>
      {/* <button onClick={otherShowClass} data-className="mammal">Show me just mammals</button> */}
      <button onClick={()=>showByClassName("mammal")}>Show me just mammals</button>
      <button onClick={()=>showByClassName("bird")}>Show me birds </button>
      <button onClick={()=>showByClassName("fish")}>Show me fish </button>
      <button onClick={resetListBtn}>Reset list</button>
      <ZooList animals={animals} />
    </div>
  );
}

export default App;
