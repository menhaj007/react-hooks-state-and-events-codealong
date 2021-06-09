import React from "react";

function Toggle({isOn, setOnOff}) {
  let status = "";
  return <button onClick={() => (isOn == true? setOnOff(isOn = false): setOnOff(isOn = true))}> {status }{isOn == true? status="ON": status="OFF"}</button>;
}

export default Toggle;
