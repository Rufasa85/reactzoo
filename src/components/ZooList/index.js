import React from 'react'
import ZooItem from "../ZooItem";
import "./style.css"

export default function ZooList(props) {
    return (
        <div className = "ZooList">
            <div className="headers">
                <h3>Headers Go Here</h3>
            </div>
           {props.animals.length ? props.animals.map(animalFromList=> <ZooItem key={animalFromList.id} animal={animalFromList}/>):<h2>Loading</h2>}
        </div>
    )
}
