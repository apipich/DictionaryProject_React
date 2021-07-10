import React from "react";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";

export default function Info(props) {
  console.log(props.info);
  if (props.info) {
return (
  <div className="information">
    <h2>{props.info.word}
    </h2>
{props.info.phonetics.map(function(phonetic, index) {
return (
<div key={index}>
  <Phonetic phonetic={phonetic} />
  </div>
);
})}

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