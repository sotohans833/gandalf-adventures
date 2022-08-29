import React, { useRef, useState } from "react";
import "@styles/CreateAdventure.css";
import Close from "@icons/Close.svg";
import useGetAdventures from "@hooks/useGetAdventures";
const API = "https://the-one-api.dev/v2/character";
const AccessToken = "_YG-PTM7WXVP7fhxaPxO";

const NewAdventure = ({ handleAdventures, createAdventure }) => {
    const characterNames = useGetAdventures(API, AccessToken);
    const [newAdventure, setNewAdventure] = useState();
    const form = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const data = {
        adventure: formData.get("adventure-name"),
        origin: formData.get("origin"),
        destination: formData.get("destination"),
        character: formData.get("character"),
        };
        if (
        !data.adventure ||
        !data.origin ||
        !data.destination ||
        !data.character
        ) {
        alert(
            "You gotta fill every field in the form to create an new adventure"
        );
        } else {
        createAdventure(data);
        setNewAdventure("");
        let container = document.getElementById("create-adventure");
        let fade = document.getElementById("fadeToBlack");
        container.style.display = "none";
        fade.style.display = "none"

        }
    };
    return (
    <section>
        <div id="fadeToBlack"></div>
        <div id="create-adventure">
            <div id="new-adventure">
            <h2>New Adventure</h2>
            <img src={Close} alt="" onClick={handleAdventures} />
            </div>
            <h3 id="about">About Adventure</h3>
            <form action="" ref={form}>
            <label htmlFor="adventure-name">Adventure name</label>
            <input
                type="text"
                id="adventure-name"
                name="adventure-name"
                value={newAdventure}
            />
            <ul id="origin-destination">
                <li id="origin-input">
                <label htmlFor="origin">Origin</label>
                <input
                    type="text"
                    id="origin"
                    name="origin"
                    value={newAdventure}
                />
                </li>
                <li id="destination-input">
                <label htmlFor="destination">Destination</label>
                <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={newAdventure}
                />
                </li>
            </ul>
            <h3 id="who">Who is the Character?</h3>
            <label htmlFor="character" id="selected-label">
                Character
            </label>
            <input
                list="choice"
                name="character"
                id="selected"
                placeholder="Search by name"
            />
            <datalist id="choice">
                {characterNames.map((name) => (
                <option
                    value={name.name}
                    name={name}
                    key={name.adventure}
                >
                    {name.name}
                </option>
                ))}
            </datalist>
            <button id="create-button" onClick={() => handleSubmit(event)}>
                Create
            </button>
            </form>
        </div>
    </section>
    );
};

export default NewAdventure;
