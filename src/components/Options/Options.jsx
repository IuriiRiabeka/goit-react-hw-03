import "./Options.module.css";
import { useState } from "react";

import Feedback
  from "../Feedback/Feedback";



const Options=({ info, clear, total })=> {
  function handleClickGood() {
    const feedBack = "good";
    info(feedBack);
  }
  function handleClickNeutral() {
    const feedBack = "neutral";
    info(feedBack);
  }
  function handleClickBad() {
    const feedBack = "bad";
    info(feedBack);
  }
  function handleClickReset() {
    clear();
  }

  
  return (
    <div className="options-container">
      		
      <div className="options-buttons-board">
        <button  className="options-button" value={"good"} onClick={handleClickGood}>Good</button>
        <button  className="options-button" value={"neutral"} onClick={handleClickNeutral}>Neutral</button>
        <button className="options-button" value={"bad"} onClick={handleClickBad}>Bad</button>
       {total != 0 &&  (<button className="options-button" onClick={handleClickReset}>Reset</button>)}
        
       
      
      </div>
      
    </div>
  );


  };


export default Options;