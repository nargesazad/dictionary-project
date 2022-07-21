import React from "react";
import Meaning from "./meaning";
import Phonetic from "./phonetic";
import "./result.css";
import Synonyms from "./synonyms";

export default function Result (props){
    let data= props.data;
    if (data){
    let word= data.word;
    let phonetics= data.phonetics;
    return (
    <div className="result">
    <h1>{word}</h1>
    {phonetics.map(function(phonetic,index){
        return(
            <div key={index}>
                <Phonetic phonetic={phonetic}/>
            </div>
        );
    })}

    <p>{data.meanings.map(function(meaning,index){
        return <div key={index}>
            <Meaning meaning={meaning}/>
            <Synonyms synonyms={meaning.synonyms}/>
            </div>})}
    </p>
</div>
);}
else {
    return null;
}
}