import React, { useState } from "react";
import axios from "axios";
import Definition from "./Definition.js";
import "./Search.css";

export default function Search() {
let [word, setWord] = useState("");
let [definition, setDefinition] = useState(null);

function showResponse(response) {
setDefinition(response.data[0]);
}

function showWord(event) {
setWord(event.target.value);

let apiUrl = `api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
axios.get(apiUrl).then(showResponse);

}


function locate(event) {
event.preventDefault();
alert(`${word}`)
  ;
  }
  
return (
<div className="dictionary">
<form onSubmit={locate}>
  <input type="search" autoFocus={true} onChange={showWord}/>
  <input type="submit" value="search"/>
</form>
<Definition definition={definition}/>
<h3>{}</h3>
</div>
) 

}