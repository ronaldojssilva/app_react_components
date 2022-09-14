import React, { Component } from "react";
import { getWeatherInfo } from "../API";
import Toast from "../components/Toast";

export default class WeatherApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            weather: {}
        }
    }

    handleChangeInput = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    }

    searchApi = async () => {
        const { city } = this.state;
        const { data } = await getWeatherInfo(city);
        this.setState({ weather: data });
        // console.log('Resquest AJAX', data);
    }

    render() {
        const { city, weather } = this.state;
        return (
            <div>
                <input type="text" name="city" placeholder="Enter city name" onChange={this.handleChangeInput} value={city} />
                <button type="button" onClick={this.searchApi}>Search</button>
                <hr />
                <Toast message='Toast example' delay={3000} color="danger"></Toast>
                {weather && weather.current ?
                    <div className="weather-info">
                        <h1>{weather.current.weather_descriptions}</h1>
                        <img src={weather.current.weather_icons} alt="" />
                        <h4>{weather.current.temperature} ºC</h4>
                    </div>
                    : <p>Not yet</p>
                }
            </div>
        );
    }
}

