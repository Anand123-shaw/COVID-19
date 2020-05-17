import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

var dataarr=[];
const fetchedData=()=>{
    fetch("https://api.covid19api.com/summary").then(res=>res.json()).then(data=>{
        for(var i=0;i<data.Countries.length;i++)
        {
            dataarr.push([data.Countries[i].Country,data.Countries[i].TotalConfirmed,data.Countries[i].TotalDeaths]);
        }
    });
};
const checker=(name)=>{
  for(var i=0;i<dataarr.length;i++){
    if(name==="Russia")
    {
        name="Russian Federation";
    }
    if(dataarr[i][0]===name)
    {
      return({
        Name:dataarr[i][0],
        Confirmed:dataarr[i][1],
        Deaths:dataarr[i][2]
      });
    } 
  }
  return({
    Name:name,
    Confirmed:0,
    Deaths:0
  });
};

const MapChart = ({ setTooltipContent }) => {
  fetchedData();
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    const {Name,Confirmed,Deaths}=checker(NAME);
                    setTooltipContent(`${Name} - Confirmed : ${Confirmed}, Deaths : ${Deaths}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);