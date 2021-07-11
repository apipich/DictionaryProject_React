import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="phonetic">
    <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer"><i class="fas fa-headphones"></i></a>
<span class="text">{props.phonetic.text}</span>
    </div>
  )
}