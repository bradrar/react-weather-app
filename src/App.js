import React, { Component } from 'react';
import './css/App.css';
import './css/weather-icons.min.css'

import weatherIcons from "./icon.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      weather: []
    };
  }

  

  
  componentDidMount() {
    fetch("http://api.openweathermap.org/data/2.5/forecast?id=1701668&APPID=b79051b62ff47ba78dbbcb347185a55e")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            weather: result.list
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  

  render() {
    const { error, isLoaded, weather } = this.state;
    let day1 = weather.slice(0,8);
    let day2 = weather.slice(8,16);
    let day3 = weather.slice(16,24);
    let day4 = weather.slice(24,32);
    let day5 = weather.slice(32,40);

   console.log(weatherIcons[200].icon)

   
    
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h2>Day 1</h2>
        
        <div className="flex-container">
        
        {day1.map(item => (
          

          <div key={item.dt}>
          <p> {item.weather[0].main} </p>
          
          { 
            (
              (item.weather[0].id > 699 && item.weather[0].id < 800)
                && 
              (item.weather[0].id > 899 && item.weather[0].id< 1000)
            ) 
          ? 
           <p> <i className={`wi wi-${weatherIcons[item.weather[0].id].icon}`}></i> </p> 
          : 
           <p> <i className={`wi wi-day-${weatherIcons[item.weather[0].id].icon}`}></i> </p> 
          }
         
          <p> {item.weather[0].description}  </p>
          </div>
       ))}

     

        </div>
        <h2>Day 2</h2>
        <div className="flex-container">
     
        {day2.map(item => (
          <div key={item.dt}>
          <p> {item.weather[0].main} </p>
          { 
            (
              (item.weather[0].id > 699 && item.weather[0].id < 800)
                && 
              (item.weather[0].id > 899 && item.weather[0].id< 1000)
            ) 
          ? 
           <p> <i className={`wi wi-${weatherIcons[item.weather[0].id].icon}`}></i> </p> 
          : 
           <p> <i className={`wi wi-day-${weatherIcons[item.weather[0].id].icon}`}></i> </p> 
          }

          <p> {item.weather[0].description}  </p>
          </div>
        ))}

     

        </div>
        <h2>Day 3</h2>
        <div className="flex-container">
     
        {day3.map(item => (
          <div key={item.dt}>
          <p> {item.weather[0].main} </p>
          
          { 
            (
              (item.weather[0].id > 699 && item.weather[0].id < 800)
                && 
              (item.weather[0].id > 899 && item.weather[0].id< 1000)
            ) 
          ? 
           <p> <i className={`wi wi-${weatherIcons[item.weather[0].id].icon}`}></i> </p> 
          : 
           <p> <i className={`wi wi-day-${weatherIcons[item.weather[0].id].icon}`}></i> </p> 
          }

          <p> {item.weather[0].description}  </p>
          </div>
        ))}

     

        </div>
        <h2>Day 4</h2>
        <div className="flex-container">
       
        {day4.map(item => (
          <div key={item.dt}>
          <p> {item.weather[0].main} </p>
          
          { 
            (
              (item.weather[0].id > 699 && item.weather[0].id < 800)
                && 
              (item.weather[0].id > 899 && item.weather[0].id< 1000)
            ) 
          ? 
           <p> <i className={`wi wi-${weatherIcons[item.weather[0].id].icon}`}></i> </p> 
          : 
           <p> <i className={`wi wi-day-${weatherIcons[item.weather[0].id].icon}`}></i> </p> 
          }

          <p> {item.weather[0].description}  </p>
          </div>
        ))}

     

        </div>
        <h2>Day 5</h2>
        <div className="flex-container">
     
        {day5.map(item => (
          <div key={item.dt}>
          <p> {item.weather[0].main} </p>
          
          { 
            (
              (item.weather[0].id > 699 && item.weather[0].id < 800)
                && 
              (item.weather[0].id > 899 && item.weather[0].id< 1000)
            ) 
          ? 
           <p> <i className={`wi wi-${weatherIcons[item.weather[0].id].icon}`}></i> </p> 
          : 
           <p> <i className={`wi wi-day-${weatherIcons[item.weather[0].id].icon}`}></i> </p> 
          }

          <p> {item.weather[0].description}  </p>
          </div>
        ))}

     

        </div>

   
        
        </div>
        // <div className="flex-container">
        //   <div> 
        //       <h3> Day 1</h3>
        //       <p> Icon here</p>
        //       <p>weather: cloudy</p>
        //   </div>
        //   <div> 
        //       <h3> Day 1</h3>
        //       <p> Icon here</p>
        //       <p>weather: cloudy</p>
        //   </div>
        //   <div> 
        //       <h3> Day 1</h3>
        //       <p> Icon here</p>
        //       <p>weather: cloudy</p>
        //   </div>
        //   <div> 
        //       <h3> Day 1</h3>
        //       <p> Icon here</p>
        //       <p>weather: cloudy</p>
        //   </div>
        //   <div> 
        //       <h3> Day 1</h3>
        //       <p> Icon here</p>
        //       <p>weather: cloudy</p>
        //   </div>
        // </div>
      );
    }
  }
}

export default App;


