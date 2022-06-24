import React, { useEffect, useState } from "react";

const Temp = () => {

    const [city, setcity] = useState(null);
    const [search, setsearch] = useState("Delhi");
    const [whether, setwhether] = useState("haze");
    useEffect(() => {
        const fetchapi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1f7673ab3a9c3016122b9f83170ba857`;
            // const url = `https://www.google.com/search?q=google+fonts&rlz=1C1CHBD_enIN899IN899&oq=goo&aqs=chrome.0.69i59l2j46i131i199i433i465i512j0i131i433i512j69i60l3j69i65.1221j0j4&sourceid=chrome&ie=UTF-8`;
            const res = await fetch(url);
            const resjson = await res.json();
            setcity(resjson.main)
            setwhether(resjson.weather[0].main);
            console.log(resjson);
        }
        fetchapi();
    }, [search])
    return (<>
        <div className="heading">
        <h1> <i class="fa-solid fa-cloud-moon"></i> Weather And Tempreture Finder  <i class="fa-solid fa-cloud-moon"></i>
        </h1>
        </div>
        <div className="box">
            <div className="inputData">
                <input type="search" value={search} className="inputField" placeholder="City Name" onChange={(event) => {
                    setsearch(event.target.value)
                }}></input>
            </div>
            {!city ? (<p className="errorMsg">No Data Found <i class="fa-solid fa-street-view"></i></p>) : (
                <>
                    <div className="info">
                        <h2 className="location">
                            <i class="fa-solid fa-street-view"></i>{search}
                        </h2>
                        <h1 className="temp">
                            {city.temp}°Cel
                        </h1>
                        <h3 className="weather">
                            Weather: {whether}
                        </h3>
                        <h3 className="tempmin_max">
                            Min: {city.temp_min}°Cel | Max: {city.temp_max}°Cel
                        </h3>
                        <h3 className="tempmin_max">
                            Humidity: {city.humidity} g.kg-1
                        </h3>
                        <h3 className="tempmin_max">
                            Pressure: {city.pressure} mb
                        </h3>

                    </div>
                    <div className="wave -one"></div>
                    <div className="wave -two"></div>
                    <div className="wave -three"></div>
                </>)}
        </div>
    </>)
}

export default Temp;

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=1f7673ab3a9c3016122b9f83170ba857