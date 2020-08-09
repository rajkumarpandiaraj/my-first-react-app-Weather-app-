import React, { Component } from 'react'
import Searchform from './Searchform'
import './style.css'


export class Weatherapphead extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            inputValue : '',
            searchValue : '',
            description : '',
            temp : '',
            isrender : false

        }
    }
    
    inputValueOnchange =(e) =>{
        this.setState({
            inputValue : e.target.value,
        })
    }
    searchresult = () =>{
        const axios = require('axios').default;
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.searchValue}&appid=a6012f092125c7ca15c4136ce7f3fdda`)
    .then(res =>{
    const description = res.data.weather[0].description ;
    const celsius = Math.floor(res.data.main.temp - 273) ;
    this.setState({
        description : description,
        temp : celsius,
        isrender : true
    })
})
.catch(err => {
    alert(err.message);
})
}

    searchBtn = (e) =>{
        e.preventDefault();
        this.setState({
            searchValue : this.state.inputValue,
        },this.searchresult)
    }
    render() {
        return (
            <div className='container'>
                <h1>Weather App</h1>
                <form className='form'>
                    <div className='form-group'>
                        <input type='text' id= 'input' placeholder='Enter the city' value={this.state.inputValue} onChange={this.inputValueOnchange}/>
                        <button type='submit' id='search' className='btn' onClick={this.searchBtn}>Search</button>
                    </div>

                </form>
                <Searchform description ={this.state.description} temp ={this.state.temp} isrender ={this.state.isrender}/>
            </div>
        )
    }
}

export default Weatherapphead
