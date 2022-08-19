import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    <ul className="Synonyms">
      return({" "}
      {props.synonyms.map(function (synonyms, index) {
        return <li key={index}>{synonyms}</li>;
      })}
    </ul>;
  } else {
    return null;
  }
}
