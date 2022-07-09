import React from "react";
import "./result.css";

export default function Result (props){
    let data= props.data;
    console.log(data);
    let word= data.word;
    let meaning= data.meanings[0].definitions[0].definition;
    let phonetic= data.phonetic;
    let pos= data.meanings[0].partOfSpeech;
    return (
    <div className="result">
    <h1>{word}</h1>
    <small>{phonetic}</small>
    <h3>{pos}</h3> 
    <p>{meaning}</p>
</div>
);
}