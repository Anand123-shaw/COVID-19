import React,{useState} from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

import "./component/map/styles.css";
import Styles from "./component/images/image.module.css";

import MapChart from "./component/map/mapChart";
import App from "./App";
import coronaImage from "./component/images/image.png";

function Map() {
  const [content, setContent] = useState("");
  return (
    <div className="map">
       <img className={Styles.image} src={coronaImage} alt="COVID-19"/>
      <div classname="mapchart">
        <MapChart  setTooltipContent={setContent} />
      </div>
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

ReactDOM.render(<Map />,document.getElementById("map"));
ReactDOM.render(<App/>,document.getElementById("root"));