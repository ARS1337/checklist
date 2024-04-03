import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Radio, RadioGroup } from "@mui/material";

function App() {
  const [checkedState, setCheckedState] = React.useState(1);

  return (
    <div style={{ padding: "2rem" }}>
      <RadioGroup
        sx={{
          flexDirection: "row",
        }}
      >
        <label>
          Option 1
          <Radio
            value={1}
            checked={checkedState === 1}
            onChange={(e) => setCheckedState(1)}
          />
        </label>

        <label>
          Option 2
          <Radio
            value={1}
            checked={checkedState === 2}
            onChange={(e) => setCheckedState(2)}
          />
        </label>

        <label>
          Option 3
          <Radio
            value={1}
            checked={checkedState === 3}
            onChange={(e) => setCheckedState(3)}
          />
        </label>
      </RadioGroup>
      <br />
      Selected state: {checkedState}
    </div>
  );
}

export default App;
