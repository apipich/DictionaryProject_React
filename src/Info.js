import React from "react";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";
import "./Info.css";

export default function Info(props) {
  console.log(props.info);
  if (props.info) {
return (
  <div className="information">
    <section>
    <br/>
    <h2>{props.info.word}</h2>
{props.info.phonetics.map(function(phonetic, index) {
return (
<div key={index}>
  <Phonetic phonetic={phonetic} />
  </div>
);
})}
</section>
<br/>
{props.info.meanings.map(function(meaning, index) {
return (
<section key={index}>
  <Meaning meaning={meaning} />
  </section>
);
})}
    </div>
);
} else {
  return null;
}
}
