import React, { useState } from "react";
import axios from "axios";
import Info from "./Info.js";
import "./Search.css";

export default function Search(props) {
let [keyword, setKeyword] = useState(props.defaultKeyword);
let [info, setInfo] = useState(null);
let [loaded, setLoad] = useState(false);

function showResponse(response) {
setInfo(response.data[0]);
}

function search() {
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
axios.get(apiUrl).then(showResponse);
}

function handleSubmit(event) {
event.preventDefault();
search();
}

function handleWord(event) {
setKeyword(event.target.value);
}

function load() {
  setLoad(true);
search();
}

if (loaded) {
return (
<div className="dictionary">
  <section>
<form onSubmit={handleSubmit}>
  <input type="search" autoFocus={true} onChange={handleWord}/>
  <input type="submit" value="search"/>
</form>
<small>Search for a keyword: winter, trees, snow...</small>
</section>
<br />
<Info info={info}/>
</div>
) 
} else {
load();
return "Loading...";
}
}


