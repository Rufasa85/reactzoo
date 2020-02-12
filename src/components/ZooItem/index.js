import React from 'react'
import "./style.css"

export default function ZooItem(props) {
    return (
        <div className = "ZooItem">
            <p>{props.animal.species}</p>
            <p>{props.animal.class}</p>
            <p>{props.animal.eatsMeat?"carnivore":"herbivore"}</p>
            <p>{props.animal.weight}</p>
        </div>
    )
}
