import React from "react";
import Meaning from "./meaning";
import "./result.css";

export default function Result (props){
    let data= props.data;
    if (data){
    console.log(data);
    let word= data.word;
    let phonetic= data.phonetic;
    return (
    <div className="result">
    <h1>{word}</h1>
    <small>{phonetic}</small>    
    <p>{data.meanings.map(function(meaning,index){
        return <div key={index}><Meaning meaning={meaning}/></div>})}
    </p>
</div>
);}
else {
    return null;
}
}