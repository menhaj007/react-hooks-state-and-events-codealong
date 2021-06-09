import React, {useState} from "react";

import Toggle from "./Toggle";

function App() {
  const [isOn, setOnOff] = useState(false);

  function swtichOnOff() {
    setOnOff( (prev) =>  prev = !prev);

  }
 

  return (
    <div>
      <h3>Toggle</h3>
      <Toggle isOn={isOn} setOnOff={swtichOnOff}/>
    </div>
  );
}

export default App;
