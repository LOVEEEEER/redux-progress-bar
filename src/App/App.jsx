import React from "react";
import { useSelector } from "react-redux";

function App() {
  const items = useSelector((state) => state.toolkit.items);

  const getLineWidth = (value) => {
    let general = items.reduce(function (sum, elem) {
      return sum + elem.value;
    }, 0);
    const result = (value * 100) / general;
    return Math.round(result);
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <div className="progress">
          {items.map((el, index) => (
            <div
              key={index}
              style={{
                width: `${getLineWidth(el.value)}%`,
                backgroundColor: el.color,
              }}
              className="progress-bar"
            ></div>
          ))}
        </div>
        <ul className="progress-items-list">
          {items.map((el, index) => (
            <li key={index} className="progress-item">
              <div
                className="progress-item-dot"
                style={{
                  backgroundColor: `${el.color}`,
                }}
              ></div>{" "}
              {el.name}: {el.value} ({getLineWidth(el.value)})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
