import React, { useState, useEffect } from 'react';
import API from "./utils/API"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import Add from "./pages/Add";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";

function App() {
  const [animals, setAnimals] = useState([]);
  const [reset, setReset] = useState(false);
  const [user, setUser] = useState({
    name:'',
    id:0,
    isAuthenticated:false
  })

  useEffect(()=>{
    API.isAuthenticated().then(res=>{
      setUser({
        name:res.data.name,
        id:res.data.id,
        isAuthenticated:true
      })
    })
  },[])
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

  function deleteAnimal(id){
    console.log(id)
    API.deleteAnimal(id).then(res=>{
      API.getAllAnimals().then(res=>{
        setAnimals(res.data)
      })
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
      <Router>
        <NavBar user={user}/>
        <h1>Zoo App!</h1>
        <Switch>
          <Route path ='/create'>
            <Add/>
          </Route>
          <Route path ='/login'>
            <Login/>
          </Route>
          <Route path='/'>
            <Home showByClassName={showByClassName} resetListBtn={resetListBtn} animals={animals} deleteAnimal={deleteAnimal}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
