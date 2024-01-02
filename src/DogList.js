import React from "react";

const DogList = ({dogs}) => dogs.map(dog =>{

    return(
        <div>
        <h1>{dog.name}</h1>
        <img src={dog.src} alt=""/>
        <div>{dog.age}</div>
        {dog.facts.map(fact => <div>{fact}</div> )}
        
        </div>
    )



})


export default DogList