import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import sunCard from "../assets/sunCard.png";
import cloudCard from "../assets/cloudCard.png";
import snowCard from "../assets/snowCard.png";
import rainCard from "../assets/rainCard.png";
import mistCard from "../assets/fog-icon-8.jpg";

const CardHour = ({ datiTotali }) => {
 
  const weatherData = useSelector((state) => state.fetchWeather); //mi porto lo stato generale della fetch weather per utilizarlo per spingere la funzione formatedDate. Questea funzione formatta l'ora e la data ricevute dall'api
  const [hourWeather, setHourWeather] = useState([]);

  const formatedDate = (dateApi) => {
    const [year, month, day] = dateApi.split("-");
    return `${day}-${month}`;
  };
  const formatedHour = (hourApi) => {
    const [hour, minutes] = hourApi.split(":");
    return `${hour}:${minutes}`;
  };

  const datiFormated = () => {
      const results = datiTotali.map((el) => {
        const dateApi = el.dt_txt.split(" ")[0];
        const hourApi = el.dt_txt.split(" ")[1];
        const date = formatedDate(dateApi);
        const hour = formatedHour(hourApi);
        return { date, hour }
      } 
    );
    setHourWeather(results)
  };

  useEffect(() => {
    datiFormated();
  }, [weatherData, datiTotali]);

  //funzione per le immagini del tempo
  const weatherImage = (weather) => {
    switch (weather) {
      case "Clear":
        return sunCard;
      case "Rain":
        return rainCard;
  
      case "Snow":
        return snowCard;
      
      case "Clouds":
        return cloudCard;
      
      case "Mist":
        return mistCard;
      
      default:
        return "";
    }
  }

  return (
    <div className="d-flex flex-column flex-md-row gap-1 text-center ps-2 ps-md-0">
      {datiTotali?.slice(0, 6).map((list, index) => {
        const weather = list.weather[0]?.main;
        const image = weatherImage(weather);
        return (
        <div key={index} className="d-flex flex-row flex-md-column align-items-center cardHour">
          <div className="order-1 d-flex align-items-center">
            <p className="m-0 text-white-50">
            <span>{hourWeather[index]?.date} / </span>
            <span>{hourWeather[index]?.hour}</span>
            </p>
          </div>
          <p className="m-0 fw-medium order-3 order-md-2">{list.main.temp.toFixed(1)} °C</p>
          <img src={image} alt="immagine del tempo" className="m-auto order-2 order-md-3 imgCardHour" />
        </div>
        )}
      )}
    </div>
  );
};

export default CardHour;
