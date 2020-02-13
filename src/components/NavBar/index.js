import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import API from "../../utils/API"

export default function NavBar(props) {
    const [user, setUser] = useState({
        name:'',
        id:0
      })
      const [authState,setAuthState]= useState(false)
    
      useEffect(()=>{
        API.isAuthenticated().then(res=>{
          setUser({
            name:res.data.name,
            id:res.data.id
          })
        })
      },[])
    return (
        <div>
            {props.user.isAuthenticated?<p>{props.user.name}</p>:null}
            <Link to='/'>Home</Link>
            <Link to='/create'>Add a creature</Link>
            <Link to='/login'>Log me in!</Link>
        </div>
    )
}
