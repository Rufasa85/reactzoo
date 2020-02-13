import React from 'react'
import "./style.css"

export default function ZooItem(props) {
    function clickHandler() {
        props.deleteClickHandler(props.animal.id)
    }
    return (
        <div className = "ZooItem">
            <p>{props.animal.species}</p>
            <p>{props.animal.class}</p>
            <p>{props.animal.eatsMeat?"carnivore":"herbivore"}</p>
            <p>{props.animal.weight}</p>
            {props.userAuth}
            {props.userAuth?<button onClick={clickHandler}>DELETE</button>:null}
        </div>
    )
}
