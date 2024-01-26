import { Col } from "react-bootstrap";
import sunCard from "../assets/sunCard.png";
import cloudCard from "../assets/cloudCard.png";
import snowCard from "../assets/snowCard.png";
import rainCard from "../assets/rainCard.png";
import mistCard from "../assets/fog-icon-8.jpg";
import moonCard from '../assets/moon-card.png'
import { useSelector } from "react-redux";

const CardCity = () => {
	const styles = {
		colonna: {
			backgroundColor: "rgba(71, 156,161, 0.4)",
		},
	};

	const weatherData = useSelector((state) => state.fetchWeather);

	//switch per i diversi stati del tempo: assegno un'immagine d'accordo a com'è il tempo: pioggia, neve, ecc; e anche d'accordo all'orario
	const statoTempo = weatherData.fetchWeather.weather?.[0]?.main;
  const newHour = new Date().getHours()
  const day = new Date().getDay()
  const month = new Date().getMonth()
  const year = new Date().getFullYear()
  
  //inizializzo un array con i mesi per poi chiamare l'indice corrispondente al mese tramite l'indice ottenuto da month
  const monthsArr = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Giulio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']

  const monthCurrent = monthsArr[month]
     
	const sunriseTime = weatherData.fetchWeather.sys?.sunrise; //ora dell'alba
	const sunsetTime = weatherData.fetchWeather.sys?.sunset; //ora del tramonto

	const sunriseMillis = sunriseTime * 1000; //ora moltiplicata per mille per ottenere i milisecondi
	const sunsetMillis = sunsetTime * 1000;

	const sunriseDate = new Date(sunriseMillis); //ottengo una nuova data a partire dei milisecondi
	const sunsetDate = new Date(sunsetMillis);
  
	const sunriseHours = sunriseDate.getHours();
	const sunsetHours = sunsetDate.getHours();

	let image;
	switch (statoTempo) {
		case "Clear":
			if ((newHour < sunriseHours)|| (newHour > sunsetHours)) {
				image = moonCard;
			}else {
        image = sunCard
      }
			break;
		case "Rain":
			image = rainCard;
			break;
		case "Snow":
			image = snowCard;
			break;
		case "Clouds":
			image = cloudCard;
			break;
		case "Mist":
			image = mistCard;
			break;
		case 'Fog':
			image = mistCard;
			break
		default:
			image = "";
	}

	return (
		<Col
			xs="12"
			md="6"
			className="d-flex justify-content-center justify-content-md-end mb-4"
		>
			<div
				className="p-3 px-4 d-flex flex-column rounded rounded-3 justify-content-center align-items-center cardCity"
				style={styles.colonna}
			>
        <span className="text-white-50">{day} {monthCurrent} {year}</span>
				<div className="d-flex flex-row align-items-center justify-content-center gap-3">
					<h1 className="h4 fw-medium">{weatherData?.fetchWeather?.name}</h1>
					<img src={image} alt="icona del tempo" className="w-25"></img>
				</div>
				<div className="d-flex flex-row align-items-center mt-md-2">
					<i className="bi bi-thermometer-half fs-1"></i>
					<h2 className="display-2 ps-2 py-2">
						{weatherData.fetchWeather?.main?.temp.toFixed(1)} °C
					</h2>
				</div>
				<h3 className="h5 ps-2 pt-md-4 text-white-50">
					TP: {weatherData.fetchWeather?.main?.feels_like.toFixed(1)} °C
				</h3>
				<p className="mt-3 h5">
					<span>
						<i className="bi bi-arrow-up text-white-50"></i>
						{weatherData.fetchWeather?.main?.temp_max.toFixed(1)} °C /{" "}
						{weatherData.fetchWeather?.main?.temp_min.toFixed(1)} °C
						<i className="bi bi-arrow-down text-white-50"></i>
					</span>
				</p>
			</div>
		</Col>
	);
};

export default CardCity;
