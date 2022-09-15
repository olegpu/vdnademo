import { useState } from "react";
import Select from "react-select";
import "./App.css";
import { Images } from "./Components/Images";
import { Preview } from "./Components/Preview";
import { Sizes } from "./types";

const sizeOptions = Object.values(Sizes).map((size) => ({
  value: {
    size,
    width: Number(size.split("x")[0]),
    height: Number(size.split("x")[1]),
  },
  label: size,
}));

function App() {
  const [selectedSize, setSize] = useState(sizeOptions[0]);

  return (
    <div className="App">
      <Select
        value={selectedSize}
        options={sizeOptions}
        onChange={(e) => {
          e && setSize(e);
        }}
      />
      <div className="container">
        <div className="preview">
          <Preview {...selectedSize.value} />
        </div>
        <div className="images">
          <Images size={selectedSize.value.size} />
        </div>
      </div>
    </div>
  );
}

export default App;
