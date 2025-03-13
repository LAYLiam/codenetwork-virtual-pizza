import { useState } from "react";
import StatusBar from "../statusbar";
import TitleBar from "../titlebar";
import many_drinks from "./../assets/other/many-drinks.png"
import napkins from "./../assets/other/napkins.png"
import scrunch from "./../assets/other/scrunch.png"

import './../styles/other.css'

export default function Other() {
  const [srunchDeployed, setScrunchDeploy] = useState(false);
  function napkinsClicked() {
    setScrunchDeploy(true);
  }

  return (
    <>
      <TitleBar/>
      <StatusBar/>
      <div className="srunch">{srunchDeployed && <img src={scrunch} className="scrunch"/>}</div>
      <div className="stage">
        <div className="pack">
          <img src={many_drinks} className="drinks" 
            alt="Image of 7 1.5L soft drinks. Included is mountain dew, 7 up, pepsi, sunkist. Most are duplicates."/> 
          <img src={napkins} className="napkins" onClick={napkinsClicked}
            alt="Two stacks of napkins atop each other. If you click on it, you'll be able to drag and drop a napkin around the screen.."/>
        </div>
        <h3>Looks like the event team forgot to buy cups again...</h3>
        <h3>No worries, we have napkins!</h3>
      </div>
    </>
  );
};