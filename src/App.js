import React, { Component } from 'react'
import Cards from "./component/Cards/Cards";
import Chart from "./component/Chart/Chart";
import CountryPicker from "./component/CountryPicker/CountryPicker";
import Styles from "./App.module.css";
import {fetchData} from "./api";


export default class App extends Component {
    
    state={
        data:{},
        country:""
    };
     async componentDidMount ()
    {
        const fetchedData = await fetchData();
        this.setState({data:fetchedData});
    }
    handleCountryChange=async(country)=>
    {
        const fetchedData=await fetchData(country);
        this.setState({data:fetchedData,country:country});
    };
    render() {
        const { data,country }=this.state;
        return (
            <div className={Styles.container}>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

