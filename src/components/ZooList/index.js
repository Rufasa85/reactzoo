import React from 'react'
import ZooItem from "../ZooItem";
import "./style.css"

export default function ZooList(props) {
    return (
        <div className = "ZooList">
            <div className="headers">
                <h3>Headers Go Here</h3>
            </div>
           {/* <ZooItem animal={animals[0]}/>
           <ZooItem animal={animals[1]}/>
           <ZooItem animal={animals[2]}/> */}
           {props.animals.length ? props.animals.map(animalFromList=> <ZooItem key={animalFromList.id} animal={animalFromList}/>):<h2>Loading</h2>}
        </div>
    )
}
