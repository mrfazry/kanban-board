import React, { Component } from "react";
import spinner from "../spinner.gif";

export default class Footer extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      temp: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  componentDidMount() {
    this.fetchWeather();
  }

  fetchWeather() {
    this.setState({ loading: true });
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=Jakarta,ID&APPID=42dea802c46574afcc551fbea0397a87&units=metric"
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          temp: data.main.temp,
          loading: false
        });
      });
  }

  handleClick() {
    this.fetchWeather();
  }

  render() {
    const { temp, loading } = this.state;
    // console.log(temp, date, loading);
    const currentTime = new Date(Date.now()).toLocaleString();
    // console.log(currentTime);
    // console.log(new Date(Date.now()).toLocaleString());
    // const date = currentTime.getDate();
    // const month = currentTime.getMonth();
    // const year = currentTime.getFullYear();
    // const hour = currentTime.getHours();
    // const minute = currentTime.getMinutes();
    // if (minute < 10) {
    //   minute = "0" + minute;
    // }
    // const second = currentTime.getSeconds();
    // const dateString = `Today is ${date} ${month} ${year}, ${hour}:${minute}:${second}`;
    const render =
      loading === true ? (
        <p>
          <img src={spinner} alt="loading spinner" height="75px" />
        </p>
      ) : (
        <p>
          Current time is {currentTime}.<br />
          Current temperature is {temp}&#8451; Celcius.
        </p>
      );

    return (
      // api.openweathermap.org/data/2.5/weather?q=Jakarta,ID,APPID=42dea802c46574afcc551fbea0397a

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm text-center">{render}</div>
        </div>

        <div className="row">
          <button
            className="btn btn-info"
            style={{ margin: "0 auto" }}
            onClick={this.handleClick}
          >
            Update weather
          </button>
        </div>
      </div>
    );
  }
}
