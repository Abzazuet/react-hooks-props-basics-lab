import React from "react";
import Links from "./Links"
function About(props) {
  const isAbout =  props.bio === undefined || props.bio === null || props.bio === "" ? false : true;
  console.log(isAbout);

  if (isAbout) {
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>{props.bio}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links linkedin={props.links.linkedin} github={props.links.github}/>
      </div>
    );
  }
  else {

    return (
      <div id="about">
        <h2>About Me</h2>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links linkedin={props.links.linkedin} github={props.links.github}/>
      </div>
    );
  }

}

export default About;
