import React from "react";


export default function Dictionary(){
    function handelSearch(){

    }
    return(
        <div className="dictionary">
            <form className="dForm" onSubmit={handelSearch}>
                <input type= "search" placeholder="Type your word" autoFocus={true} />
                <button className="btn btn-info" >Search</button>
            </form>
        </div>
    );
}