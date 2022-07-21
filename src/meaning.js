import React from "react";
//import Synonyms from "./synonyms";

export default function Meaning(props){
    return(<div className="meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function(definition,index){
            return(
                <div key={index}>
                   <strong>Definition: </strong> <p>{definition.definition}<br/>
                   Example: <em>{definition.example}</em>
                   {/* <Synonyms synonyms={definition.synonyms} /> */}
                    </p>
                </div>
            );
        })}
    </div>);
}
