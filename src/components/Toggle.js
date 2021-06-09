import React, {useState} from "react";


// function Toggle({isOn, setOnOff}) {
//   let status = "";
//   return <button onClick={() => (isOn == true? setOnOff(isOn = false): setOnOff(isOn = true))}> {status }{isOn == true? status="ON": status="OFF"}</button>;
// }

// export default Toggle;

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  const color = isOn ? "red" : "white";

  return (
    <button style={{ background: color }} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
} 
export default Toggle;