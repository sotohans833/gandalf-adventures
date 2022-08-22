import React, { useEffect, useState } from "react";
import Character from "../components/Character";
// import useGetAdventures from "../hooks/useGetAdventures";
import axios from "axios";

const API = "https://api.escuelajs.co/api/v1/products/";


const CharacterList = () => {
    const [adventures, setAdventures] = useState([]);

        useEffect( async () => {
            const response = await axios(API);
            setAdventures(response.data);
        }, [])
    return(
        <div id="character-container">
            {adventures.map(adventure => (
                <Character adventure={adventure} key={adventure.id}/>
            ))}
        </div>
    )
}

export default CharacterList;