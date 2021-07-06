import React, { useState } from "react";
import axios from "axios";
import Information from "./Information.js";
import "./Search.css";

export default function Search() {
let [word, setWord] = useState("");
let [info, setInfo] = useState(null);

function showResponse(response) {
setInfo(response.data[0]);
}

function locate(event) {
event.preventDefault();

let apiUrl = `api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
axios.get(apiUrl).then(showResponse);
}

function handleSubmit(event) {
setWord(event.target.value);
}



return (
<div className="dictionary">
<form onSubmit={locate}>
  <input type="search" autoFocus={true} onChange={handleSubmit}/>
  <input type="submit" value="search"/>
</form>
<Information info={info} />
</div>
) 

}
