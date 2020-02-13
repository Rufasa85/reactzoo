import React, {useState,useEffect} from 'react'
import ZooList from "../../components/ZooList";
import API from '../../utils/API';

export default function Home(props) {
   const [isUserAuthenticated,setIsUserAuthenticated] = useState(false);
    useEffect(()=>{
        API.isAuthenticated().then(res=>{
            setIsUserAuthenticated(true)
        }).catch(err=>{
            console.log(err);
        })
    },[])
    return (
        <div>
            <button onClick={() => props.showByClassName("mammal")}>Show me just mammals</button>
            <button onClick={() => props.showByClassName("bird")}>Show me birds </button>
            <button onClick={() => props.showByClassName("fish")}>Show me fish </button>
            <button onClick={props.resetListBtn}>Reset list</button>
            <ZooList animals={props.animals} deleteClickHandler={props.deleteAnimal} userAuth={isUserAuthenticated}/>
        </div>
    )
}


