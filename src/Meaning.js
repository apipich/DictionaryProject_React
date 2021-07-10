import React from "react";
import Synonyms from "./Synonyms.js";
import "./Meaning.css";

export default function Meaning(props) {
return (
  <div className="details">
    <h4>{props.meaning.partOfSpeech}</h4>
{props.meaning.definitions.map(function(definition, index) {
return (
  <div key={index}>
    <p>
{definition.definition}
{definition.example}
</p>
<Synonyms synonyms={definition.synonyms} />
</div>
)

})}

</div>
)
}