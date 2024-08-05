import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.word}</h2>
          <div className="Phonetic">
            <Phonetic phonetic={props.results.phonetic} />
          </div>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />;
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
