import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import sunCard from "../assets/sunCard.png";
import cloudCard from "../assets/cloudCard.png";
import snowCard from "../assets/snowCard.png";
import rainCard from "../assets/rainCard.png";
import mistCard from "../assets/fog-icon-8.jpg";
import moonCard from '../assets/moon-card.png'

const CardHour = ({ datiTotali }) => {
  const styles = {
    divContainer: {
      width: '40%',
      height: '20%',
    },
    img: {
      width: '6%'
    },
    divCard: {
      width: '18%'
    }
  };

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
    <div className="w-100 d-flex flex-md-row flex-column gap-2 text-center">
      {datiTotali?.slice(0, 6).map((list, index) => {
        const weather = list.weather[0]?.main;
        const image = weatherImage(weather);
        return (
        <div key={index} className="d-flex flex-row flex-md-column cardHour align-items-center" style={styles.divCard}>
          <div className="order-1 d-flex align-items-center">
            <p className="m-0 text-white-50">
            <span>{hourWeather[index]?.date} / </span>
            <span>{hourWeather[index]?.hour}</span>
            </p>
          </div>
          <p className="m-0 fw-medium order-3 order-md-2">{list.main.temp.toFixed(1)} °C</p>
          <img src={image} alt="imagine del tempo" className="w-50 m-auto order-2 order-md-3 imgCardHour" />
        </div>
        )}
      )}
    </div>
  );
};

export default CardHour;
