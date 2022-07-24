import axios from "axios";
import React, { useEffect, useState } from "react";
import "./result.css"

export default function Photos(props){
    let [photos,setPhotos] =useState(null);
const apiKey="563492ad6f917000010000015f041cd965ba4125be4cd3e9b0c5faa0";
const apiUrl=`https://api.pexels.com/v1/search?query=${props.word}&per_page=3`;
const headers ={ Authorization: `Bearer ${apiKey}`};

function HandelPhotos(response){
    setPhotos(response.data.photos);
}

useEffect(()=>{axios.get(apiUrl,{headers: headers })
.then(HandelPhotos);},[props.word , apiUrl]) 
if(photos){
    return(
        <div className="photos row">
            {photos.map(function(photo,index){
                return(
                    <div className="col-4" key={index}>
                    <img src={photo.src.medium} alt={props.word} className="img-fluid"/>
                    </div>
                );
            })}
        </div>
    );
    }
    else{
        return null;
    }
}