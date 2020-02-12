import React, { useState, useEffect } from 'react';
import ZooList from "./components/ZooList";

function App() {
  const [animals, setAnimals] = useState([])
  useEffect(() => {
    setTimeout(() => {
      setAnimals([
        {
          "id": 1,
          "species": "zebra",
          "class": "mammal",
          "eatsMeat": false,
          "weight": 200
        },
        {
          "id": 2,
          "species": "lion",
          "class": "mammal",
          "eatsMeat": true,
          "weight": 150
        },
        {
          "id": 3,
          "species": "whale shark",
          "class": "fish",
          "eatsMeat": false,
          "weight": 5000
        },
        {
          "id": 4,
          "species": "penguin",
          "class": "bird",
          "eatsMeat": true,
          "weight": 5
        },
        {
          "id": 5,
          "species": "bald eagle",
          "class": "bird",
          "eatsMeat": true,
          "weight": 10
        },
        {
          "id": 6,
          "species": "banana slug",
          "class": "insect",
          "eatsMeat": false,
          "weight": 1
        },
        {
          "id": 7,
          "species": "manatee",
          "class": "mammal",
          "eatsMeat": false,
          "weight": 75
        },
        {
          "id": 8,
          "species": "gorilla",
          "class": "mammal",
          "eatsMeat": false,
          "weight": 100
        },
        {
          "id": 9,
          "species": "cat",
          "class": "mammal",
          "eatsMeat": true,
          "weight": 4
        },
        {
          "id": 10,
          "species": "frog",
          "class": "amphibian",
          "eatsMeat": false,
          "weight": 2
        }
      ])
    }, 1500)
  }, [])
  return (
    <div>
      <h1>Zoo App!</h1>
      <ZooList animals={animals} />
    </div>
  );
}

export default App;
