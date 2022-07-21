import React from "react";

export default function Phonetic(props){
    return(
        <div className="phonetic">
            <small>{props.phonetic.text}</small>
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">Listen </a>
        </div>
    )
}