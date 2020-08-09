import React from 'react'
import './all.min.css'
function searchform(props) {
    // console.log(props.description, props.temp);
    return  props.isrender && (
        <>
        <div className="weather-display">
            <div className="cloud-img">
                <i id='sun' className="fa fa-cloud-sun fa-10x"></i>
                <i id='cloud' className="fa fa-cloud fa-8x"></i>
            </div>
            <div className="temp-text">
                <p className="temp">{props.description}</p>
    <p className="temp-description">{props.temp}<span>&deg;C</span></p>
            </div>
        </div>
    </>
    ) 

}

export default searchform
