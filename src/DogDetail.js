import React from "react";
import {useParams} from "react-router-dom"


const DogDetail = ({dogs}) => {
    let {doggy} = useParams()
    
    return(
        <div>
        {dogs.filter(dog=> dog.name.toLowerCase() === doggy).map(dog => {
            return (<div>
                <h1>{dog.name}</h1>
                <img src={"../" + dog.src} alt="" />
                <div>{dog.facts.map(fact => <div>{fact}</div>)}</div>
                </div>)
        })

        }
        </div>
    )
}


export default DogDetail;