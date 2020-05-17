import React, {useState,useEffect} from "react";
import {fetchDailyData} from "../../api";
import {Line,Bar} from "react-chartjs-2";
import Styles from "./Chart.module.css"; 

const Chart=({data:{confirmed,recovered,deaths},country})=>
{
    const[dailyData,setDailyData]=useState([]);
    useEffect(()=>{
            const fetchAPI = async() =>
            {
                setDailyData (await fetchDailyData());
            }
            fetchAPI();
    },[]);
    const LineChart =(
        dailyData.length
        ?(<Line 
            data={{
                labels : dailyData.map(({date})=> date),
                datasets : [{
                    data:dailyData.map(({ confirmed})=>confirmed),
                    label:"Infected",
                    borderColor:"#3333ff",
                    fill:true,
                },{
                    data:dailyData.map(({ deaths})=>deaths),
                    label:"Deaths",
                    backgroundColor:"rgba(255,0,0,0.5)",
                    borderColor:"red",
                    fill:true,
                }],
            }}
        />):null
    );
    const barChat=(
        confirmed
        ?(<Bar
            data={{
                labels:["Infected","Recovered","Deaths"],
                datasets:[{
                    labels:"People",
                    backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5","rgba(255,0,0,0.5"],
                    data:[confirmed.value,recovered.value,deaths.value]
                }]
            }}
            options={{
                legend:{display:false},
                title:{display:true,text:`Current country is ${country} `},
            }}
        />):null
    );
    return (
        <div className={Styles.container}>
            {(country && country!=="global")?barChat:LineChart}
        </div>
    );

};

export default Chart;