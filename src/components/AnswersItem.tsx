// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

import React from "react";
import { act } from "react-dom/test-utils";

function ItemsList({ list }) {
  let activites : string[]= []

  if (list[0]){
    activites.push("Swimming")
  }
  if (list[1]){
    activites.push("Bathing")
  }
  if (list[2]){
    activites.push("Chatting")
  }
  if (list[3]){
    activites.push("I don't like to spend time with it")
  }
  
  return (
    <ul>
      {activites.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  
  answerItem: { username, color, timeSpent, review }
}) {
  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{color}</span>
        </p>
        
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={timeSpent} />
        
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
      </article>
    </li>
  );
}
