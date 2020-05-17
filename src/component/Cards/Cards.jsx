import React from "react";
import CountUp from "react-countup";
import Styles from "./Cards.module.css";
import CoronaImage from "../images/corona.png";

const Cards=({data:{confirmed,recovered,deaths,lastUpdate}})=>
{
    if(!confirmed)
    {
        return "loading..";
    }
    return (
        <div class="card-group" className={Styles.container} >
            <div class="card" xs={12} md={3} className={Styles.card,Styles.infected}>
                <img class="card-img-top" src={CoronaImage} alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Infected></h5>
                <p class="card-text">
                    <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                </p>
                </div>
                <div class="card-footer">
                <small class="text-muted">Last updated {new Date(lastUpdate).toTimeString()} ago</small>
                </div>
            </div>
            <div class="card" xs={12} md={3} className={Styles.card,Styles.recovered}>
                <img class="card-img-top" src={CoronaImage} alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Recovered></h5>
                <p class="card-text">
                    <CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
                </p>
                </div>
                <div class="card-footer">
                <small class="text-muted">Last updated {new Date(lastUpdate).toTimeString()} ago</small>
                </div>
            </div>
            <div class="card" xs={12} md={3} className={Styles.card,Styles.deaths}>
                <img class="card-img-top" src={CoronaImage} alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Deaths</h5>
                <p class="card-text">
                    <CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
                </p>
                </div>
                <div class="card-footer">
                <small class="text-muted">Last updated {new Date(lastUpdate).toTimeString()} ago</small>
                </div>
            </div>
        </div>
    );
};
export default Cards;