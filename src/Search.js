import React, { useState } from "react";
import "./Search.css";

export default function Search() {
let [word, setWord] = useState("");

function showWord(event) {
setWord(event.target.value);
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