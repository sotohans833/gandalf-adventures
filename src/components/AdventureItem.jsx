import React from "react";
import placeHolder from "@assets/placeholder.png"
import "@styles/AdventureItem.scss"

const AdventureItem = ({item}) => {
    return (
        <article id="adventures-item">
            <img src={placeHolder} alt=""/>
            <div id="adventure-container">
                <h2>{item.birth}</h2>
                <div id="api-info">
                    <div>
                        <h3>{item.name}</h3>
                        <p>{item.race}</p>
                    </div>
                    <ul id="location">
                        <li>Origin <span>{item.spouse}</span></li>
                        <li>Destination <span>{item.death}</span></li>
                    </ul>
                </div>
            </div>
        </article>
    );
}

export default AdventureItem;