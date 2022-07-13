import React,{useState} from "react";
import axios from "axios";
import Result from "./result";


export default function Dictionary(){
    let [word,setWord]=useState("");
    let [data,setData] = useState(null);
   
    function handelRespons(res){
    setData(res.data[0]);
    }

    function handelSearch(event){
        event.preventDefault();
        let url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(url).then(handelRespons);
    }

    function handelWordChange(event){
        setWord(event.target.value);
    }
    return(
        <div className="dictionary">
            <form className="dForm" onSubmit={handelSearch}>
                <input type= "search" placeholder="Type your word" onChange={handelWordChange}/>
               
            </form>
            <Result data={data}/>
        </div>
    );
}


 //<button type="submit" className="btn btn-info" >Search</button>