import React from "react";

//Initial variable setup
let greeting;
let greetingStyle = {
  color: "black",
  borderColor: "black"
};

//Adjust greeting and style based on time
let currentHour = new Date().getHours(); //Get current hour
//Between midnight and 12PM show "Good morning" in red color
if (currentHour >= 0 && currentHour < 12) {
  greeting = "Good Morning";
  greetingStyle.color = "red";
  greetingStyle.borderColor = "red";
} else if (currentHour >= 12 && currentHour < 18) {
  //Between 12PM and 6PM show "Good afternoon" in green color
  greeting = "Good Afternoon";
  greetingStyle.color = "green";
  greetingStyle.borderColor = "green";
} else if (currentHour >= 18 && currentHour <= 23) {
  //Between 6PM and Midnight show "Good evening" in blue
  greeting = "Good Evening";
  greetingStyle.color = "blue";
  greetingStyle.borderColor = "blue";
}

//Render heading with adjustments based on time
function Heading() {
  return (
    <h1 className="heading" style={greetingStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;
