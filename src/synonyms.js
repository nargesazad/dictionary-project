import React from "react";

export default function Synonyms(props){
    console.log(props.synonyms)
    if (props.synonyms[0]){
            return (
            <div>
                <strong>Synonyms :</strong>
                {props.synonyms.map(function(synonym,index){
                    return(
                        <div key={index} className="d-inline">
                         {synonym} -                 
                        </div>
                    );})}
                
            </div>
            );
        }
else{ 
    return null;
};
}