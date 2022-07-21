import React from "react";
import "./result.css";

export default function Phonetic(props){
    return(
        <div className="phonetic ">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">Listen</a>
            <small>{props.phonetic.text} </small>
        </div>
    )
}