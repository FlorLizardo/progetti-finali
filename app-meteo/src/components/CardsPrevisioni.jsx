import { Card } from "react-bootstrap";
import sunCard from "../assets/sunCard.png";
import cloudCard from "../assets/cloudCard.png";
import snowCard from "../assets/snowCard.png";
import rainCard from "../assets/rainCard.png";
import mistCard from "../assets/fog-icon-8.jpg";
import sunCloudCard from "../assets/cloud-sun-card.png";

const CardsPrevisioni = ({ forecast }) => {
	const styles = {
		background:
			"linear-gradient(360deg, rgba(1,151,255,0.2) 49%, rgba(65,88,216,0.4) 88%)",
		img: {
			width: "20%",
		},
	};

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
	};

	return (
		<div className="d-flex mt-3 gap-3 mb-5 justify-content-center flex-column w-100">
			{forecast.slice(0, 5).map((dato, index) => {
				const weather = dato.weatherMain;
				const image = weatherImage(weather);
				return (
					<Card
						className="align-items-center text-center px-2 d-flex flex-row justify-content-around border border-0 cardGiorno"
						key={index}
						style={styles}
					>
						<h4 className="w-25 fs-6 text-white-50">{dato.date}</h4>
						<img src={image} alt="" className='imgCardPrevisioni' />
						<span className="fw-medium text-white">
							{dato.tempMax.toFixed(1)} °C / {dato.tempMin?.toFixed(1)} °C
						</span>
					</Card>
				);
			})}
		</div>
	);
};

export default CardsPrevisioni;
