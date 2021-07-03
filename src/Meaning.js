import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
return (
  <div className="mainMeaning">
<h3>{props.meaning.partOfSpeech}</h3>
<p>{props.meaning.definition[0].definition}</p>
</div>
);

}