import React from "react";

export default function Info(props) {
  console.log(props.info);
  if (props.info) {
return (
  <div className="information">
    <h2>{props.info.word}
    </h2>
    </div>
);

} else {
  return null;
}
}