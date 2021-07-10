import React from "react";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";
import "./Info.css";

export default function Info(props) {
  console.log(props.info);
  if (props.info) {
return (
  <div className="information">
    <br/>
    <h2>{props.info.word}
    </h2>
{props.info.phonetics.map(function(phonetic, index) {
return (
<div key={index}>
  <Phonetic phonetic={phonetic} />
  </div>
);
})}
<br/>
{props.info.meanings.map(function(meaning, index) {
return (
<div key={index}>
  <Meaning meaning={meaning} />
  </div>
);
})}
    </div>
);

} else {
  return null;
}
}