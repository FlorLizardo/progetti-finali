import { Col, Card } from 'react-bootstrap'
import cloud from "../assets/cloud.png";
import cloudSun from "../assets/cloud-sun.png";
import umidity from "../assets/umidity.png";
import wind from "../assets/wind.png";
import { useSelector } from 'react-redux';

const CardsWeather = () => {
	const styles = {
		containerCard: {
			width: "36%",
			height: "8rem",
			backgroundColor: "rgba(71, 156, 161, 0.4)",
		},
		divImg: {
			width: "28%"
		}
	}

	const weatherData = useSelector(state => state.fetchWeather)

  return (
    <>
      <Col
				xs="12"
				md="6"
				className="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-md-start ps-md-5 flex-wrap column-gap-4 row-gap-4 row-gap-md-0 py-5"
			>
				<Card
					className=" ps-2 border border-0 rounded rounded-3 d-flex  flex-row align-items-center text-white cardWeather"
					style={styles.containerCard}
				>
					<div style={styles.divImg} className='divImgCardWeather ms-sm-0 ms-3'>
						<img src={cloudSun} alt="" className="w-75" />
					</div>
					<div className="text-center p-sm-1 p-4 divInfoCard">
						<h3 className="h5 text-white-50">Cielo: </h3>
						<p className="h3 fw-normal">{weatherData.fetchWeather.weather?.[0]?.description}</p>
					</div>
				</Card>
				<Card
					className=" ps-2 border border-0 rounded rounded-3 d-flex flex-row align-items-center text-white cardWeather"
					style={styles.containerCard}
				>
					<div style={styles.divImg} className='divImgCardWeather ms-sm-0 ms-3'>
						<img src={cloud} alt="" className="w-100" />
					</div>
					<div className="text-center p-sm-3 p-4 divInfoCard">
						<h3 className="h5 text-white-50">Nuvole: </h3>
						<p className="h2 fw-normal">{weatherData.fetchWeather.clouds?.all}%</p>
					</div>
				</Card>
				<Card
					className="ps-2 border border-0 rounded rounded-3 d-flex flex-row align-items-center text-white cardWeather"
					style={styles.containerCard}
				>
					<div style={styles.divImg} className='divImgCardWeather ms-sm-0 ms-3'>
						<img src={wind} alt="" className="w-75" />
					</div>
					<div className="text-center p-sm-1 p-4 divInfoCard">
						<h3 className="h5 text-white-50">Vento: </h3>
						<p className="h2 fw-normal">{weatherData.fetchWeather.wind?.speed} km/h</p>
					</div>
				</Card>
				<Card
					className="border border-0 rounded rounded-3 d-flex flex-row align-items-center ps-2 text-white cardWeather"
					style={styles.containerCard}
				>
					<div style={styles.divImg} className='divImgCardWeather ms-sm-0 ms-3'>
						<img src={umidity} alt="" className="w-75" />
					</div>
					<div className="text-center p-sm-1 p-4 divInfoCard">
						<h3 className="h5 text-white-50">Umidità: </h3>
						<p className="h2 fw-normal">{weatherData.fetchWeather.main?.humidity}%</p>
					</div>
				</Card>
			</Col>
    </>
  )
}

export default CardsWeather