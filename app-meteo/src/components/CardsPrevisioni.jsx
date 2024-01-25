import { Card } from "react-bootstrap";

const CardsPrevisioni = ({ forecast }) => {
	const styles = {
		background:
			"linear-gradient(360deg, rgba(1,151,255,0.2) 49%, rgba(65,88,216,0.4) 88%)",
	};

	return (
		<div className="d-flex mt-3 gap-3 mb-5 justify-content-center flex-column w-75">
			{forecast?.slice(0, 5).map((dato, index) => (
				<Card
					className="align-items-center text-center px-2 d-flex flex-row justify-content-between border border-0 cardGiorno"
					key={index}
					style={styles}
				>
					<h4 className="w-25 fs-6 text-white-50">{dato?.date}</h4>
					<span className="fw-medium w-75 text-white">
						<i className="bi bi-arrow-up text-white-50"></i>
						{dato?.tempMax.toFixed(1)} °C / {dato?.tempMin.toFixed(1)} °C
						<i className="bi bi-arrow-down text-white-50"></i>
					</span>
				</Card>
			))}
		</div>
	);
};

export default CardsPrevisioni;
