import React from "react";
import Synonyms from "./Synonyms.js";
import "./Meaning.css";

export default function Meaning(props) {
return (
  <div className="details">
    <section>
    <h4>{props.meaning.partOfSpeech}</h4>
{props.meaning.definitions.map(function(definition, index) {
return (
  <div key={index}>
    <div className="definition">
{definition.definition}
</div>
<div className="example">{definition.example}</div>
<br/>
<Synonyms synonyms={definition.synonyms} />
</div>
)
})}
</section>
<br/>
</div>
)
}
