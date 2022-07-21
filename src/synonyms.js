import React from "react";
import "./result.css";

export default function Synonyms(props){
    if (props.synonyms[0]){
            return (
            <div>
                <strong>Synonyms :</strong>
                {props.synonyms.map(function(synonym,index){
                    return(
                        <div key={index} className="synonym">
                         {synonym}               
                        </div>
                    );})}
                
            </div>
            );
        }
else{ 
    return null;
};
}