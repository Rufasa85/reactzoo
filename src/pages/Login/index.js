import React, { useState } from 'react'
import API from "../../utils/API"

export default function Login(props) {
    const [login, setLogin] = useState({
        name: "",
        password: ""
    })
    const handleInputChange = event => {
        const { name, value } = event.target;
        setLogin({
            ...login,
            [name]: value
        })
    }
    const handleFormSubmit = event => {
        event.preventDefault();
        API.login(login).then(res=>{
            console.log(res.data)
        }).catch(err=>{
            console.log(err);
        })
    }
    const isAuthButton = event => {
        API.isAuthenticated().then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log("error occured", err)
        })
    }
    return (
        <div>
            <button onClick={isAuthButton}>Check login status</button>
            <form onSubmit={handleFormSubmit}>
                {/* {willRedirect?<Redirect to='/'/>:null} */}
                <input onChange={handleInputChange} value={login.name} type="text" name="name" placeholder="name" />
                <input onChange={handleInputChange} value={login.password} type="password" name="password" placeholder="class" />
                <input type="submit" value="Log me in" />
            </form>
        </div>
    )
}
