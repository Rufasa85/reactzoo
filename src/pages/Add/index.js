import React,{useState,useEffect} from 'react'
import API from "../../utils/API"
import {Redirect,useHistory} from "react-router-dom"

export default function Add(props) {
    const history = useHistory();
    const [newAnimal, setNewAnimal]= useState({
        species:'',
        class:'',
        weight:0,
        eatsMeat:false
    })
    useEffect(()=>{
        API.isAuthenticated().then(res=>{
            console.log("yay you can make animals!")
        }).catch(err=>{
            history.push("/login")
        })
    },[])
    // const [willRedirect,setWillRedirect] = useState(false);
    const handleInputChange = event=>{
        const {name,value} = event.target;
        setNewAnimal({
            ...newAnimal,
            [name]:value
        })
    }
    const handleFormSubmit = event=>{
        event.preventDefault();
        console.log(newAnimal);
        API.createAnimal(newAnimal).then(res=>{
            console.log(res.data)
            setNewAnimal({
                species:'',
                class:'',
                weight:0,
                eatsMeat:false
            })
           history.push("/")
            
        }).catch(err=>{
            console.log(err);
        })
    }
    return (
        <form onSubmit={handleFormSubmit}>
            {/* {willRedirect?<Redirect to='/'/>:null} */}
            <input onChange={handleInputChange} value={newAnimal.species} type="text" name="species" placeholder="species"/>
            <input onChange={handleInputChange} value={newAnimal.class} type="text" name="class" placeholder="class"/>
            <input onChange={handleInputChange} value={newAnimal.weight} type="number" name="weight" placeholder="weight"/>
            <input type="submit" value="Add this animal please!"/>
        </form>
    )
}
