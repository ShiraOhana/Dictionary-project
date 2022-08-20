import React from "react";

export default function Phonetic(props) {
  console.log("props.phonetic", props);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank">
        Listen
      </a>
      <br></br>
      {props.phonetic.text}
    </div>
  );
}
