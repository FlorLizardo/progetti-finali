import { Col, Card } from 'react-bootstrap'
import cloud from "../assets/cloud.png";
import cloudSun from "../assets/cloud-sun.png";
import umidity from "../assets/umidity.png";
import wind from "../assets/wind.png";
import { useSelector } from 'react-redux';

const CardsWeather = () => {
	const weatherData = useSelector(state => state.fetchWeather)

  return (
    <>
      <Col
				xs="12"
				md="6"
				className="d-flex flex-column flex-sm-row flex-wrap align-items-center justify-content-center justify-content-md-start column-gap-4 row-gap-4 row-gap-md-4 ps-md-5 py-4 py-md-0 my-auto"
			>
				<Card
					className="ps-2 border border-0 rounded rounded-3 d-flex flex-row align-items-center text-white cardWeather"
				>
					<div className='ms-sm-0 ms-3 divImgCardWeather'>
						<img src={cloudSun} alt="" className="w-75" />
					</div>
					<div className="text-center p-sm-1 p-4 divInfoCard">
						<h3 className="h5 text-white-50">Cielo: </h3>
						<p className="h4 fw-normal">{weatherData.fetchWeather.weather?.[0]?.description}</p>
					</div>
				</Card>
				<Card
					className=" ps-2 border border-0 rounded rounded-3 d-flex flex-row align-items-center text-white cardWeather"
					
				>
					<div className='ms-sm-0 ms-3 divImgCardWeather'>
						<img src={cloud} alt="" className="w-100" />
					</div>
					<div className="text-center p-sm-3 p-4 divInfoCard">
						<h3 className="h5 text-white-50">Nuvole: </h3>
						<p className="h4 fw-normal">{weatherData.fetchWeather.clouds?.all}%</p>
					</div>
				</Card>
				<Card
					className="ps-2 border border-0 rounded rounded-3 d-flex flex-row align-items-center text-white cardWeather"
				>
					<div className='ms-sm-0 ms-3 divImgCardWeather'>
						<img src={wind} alt="" className="w-75" />
					</div>
					<div className="text-center p-sm-1 p-4 divInfoCard">
						<h3 className="h5 text-white-50">Vento: </h3>
						<p className="h4 fw-normal">{weatherData.fetchWeather.wind?.speed} km/h</p>
					</div>
				</Card>
				<Card
					className="border border-0 rounded rounded-3 d-flex flex-row align-items-center ps-2 text-white cardWeather"
				>
					<div className='ms-sm-0 ms-3 divImgCardWeather'>
						<img src={umidity} alt="" className="w-75" />
					</div>
					<div className="text-center p-sm-1 p-4 divInfoCard">
						<h3 className="h5 text-white-50">Umidità: </h3>
						<p className="h4 fw-normal">{weatherData.fetchWeather.main?.humidity}%</p>
					</div>
				</Card>
			</Col>
    </>
  )
}

export default CardsWeather