import React ,{useState,useEffect} from "react";
import {fetchCountries} from "../../api";
const CountryPicker=({handleCountryChange})=>
{
    const [fetchedContries,setFetchedCountries]=useState([]);
    useEffect(()=>
    {
        const fetchAPI=async()=>
        {

            setFetchedCountries(await fetchCountries());

        }
        fetchAPI();
    },[setFetchedCountries]);
    return (
            <form defaultValue="" onChange={(e)=>handleCountryChange(e.target.value?e.target.value:global)}>
                <div class="form-row align-items-center">
                <div class="col-auto my-1"/>
                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected value="global">Global</option>
                    {fetchedContries.map((country,i)=><option key={i} value={country}>{country}</option>)}
                    </select>
                </div>
            </form>
        );
};

export default CountryPicker;