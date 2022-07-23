import React,{useState} from "react";
import axios from "axios";
import Result from "./result";
import Photos from "./photos";



export default function Dictionary(props){
    let [word,setWord]=useState(props.defaultWord);
    let [data,setData] = useState(null);
    let[loaded,setLoaded]=useState(false);
   
    function handelRespons(res){
    setData(res.data[0]);
    }
    
    function Searching (){
        let url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(url).then(handelRespons);
    }

    function handelSearch(event){
        event.preventDefault();
        Searching();
    }

    function handelWordChange(event){
        setWord(event.target.value);
    }

    function Load(){
        setLoaded(true);
        Searching();
    }

    if (loaded){
    return(
        <div className="dictionary">
            <section>
            <form className="dForm" onSubmit={handelSearch}>
                <input type= "search" placeholder="Type your word" onChange={handelWordChange}/>
               
            </form>
            </section>
            <section><Photos word={word}/></section>
            <Result data={data}/>
        </div>
    );
    }
    else{
        Load();
        return "loadind...";
    }
}

 //<button type="submit" className="btn btn-info" >Search</button>