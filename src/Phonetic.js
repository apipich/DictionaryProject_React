import React from "react";

export default function Phonetic(props) {
  return (
    <div className="phonetic">
    <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">Listen here</a>
<span>   </span>{props.phonetic.text}
    </div>
  )
}