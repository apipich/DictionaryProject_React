import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
let [word, setWord] = useState("");
function showResponse(response) {
console.log(response.data[0]);
}

function showWord(event) {
setWord(event.target.value);

let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
axios.get(apiUrl).then(showResponse);

}


function locate(event) {
event.preventDefault();
alert(`Searching for ${word}`);
  }
  
return (
<div className="dictionary">
<form onSubmit={locate}>
  <input type="search" autoFocus={true} onChange={showWord}/>
  <input type="submit" value="search"/>
</form>
</div>
) 
  
}