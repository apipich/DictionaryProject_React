import React, { useState } from "react";
import axios from "axios";
import Info from "./Info.js";
import Photos from "./Photos.js";
import "./Search.css";

export default function Search(props) {
let [keyword, setKeyword] = useState(props.defaultKeyword);
let [info, setInfo] = useState(null);
let [loaded, setLoad] = useState(false);
let [photos, setPhotos] = useState(null);

function showResponse(response) {
setInfo(response.data[0]);
}

function showPexelResponse(response) {
setPhotos(response.data.photos);
}

function search() {
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
axios.get(apiUrl).then(showResponse);

let pexelApiKey = "563492ad6f917000010000012b167b8f729e4031a7395066e2ef4ac4";
let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`
let headers = { Authorization: `Bearer ${pexelApiKey}` };
axios.get(pexelApiUrl, { headers: headers }).then(showPexelResponse);
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
  <input type="search" autoFocus={true} onChange={handleWord} defaultValue={props.defaultKeyword}/>
  <input type="submit" value="search"/>
</form>
<small>Search for a keyword: winter, trees, ocean...</small>
</section>
<br />
<Info info={info}/>
<Photos photos={photos}/>
</div>
) 
} else {
load();
return "Loading...";
}
}


