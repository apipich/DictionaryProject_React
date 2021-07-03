import React from "react";

export default function Definition(props) {
  if (props.definition) {
    return (
  <div className="mainDefinition">
<h2>{props.definition.word}</h2>
</div>
);

} else {
return null;
}

}