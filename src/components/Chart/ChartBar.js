import { useState } from "react";
import "./ChartBar.css";
const ChartBar = (props) => {
  const [flag, setFlag] = useState(0);
  const onStartAnimation = () => {
    setFlag(1)
    console.log("ANIMATION START")
  }
  let barFillHeight = "0%";
  if (props.maxValue > 0)
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  console.log("CHARTBAR.js");
  console.log(props);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight}}
        >
          <div className="chart-bar__col"></div>
        </div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};
export default ChartBar;
