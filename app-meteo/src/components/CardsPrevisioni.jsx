import { Card } from "react-bootstrap";

const CardsPrevisioni = ({ forecast }) => {
	const styles = {
		background:
			"linear-gradient(360deg, rgba(1,151,255,0.2) 33%, rgba(1,40,255,0.4) 77%)",
	};

	return (
		<div className="d-flex d-block d-md-none flex-column mt-3 gap-3 mb-5 justify-content-center">
			{forecast?.slice(0, 5).map((dato, index) => (
				<Card
					className="cardGiorno align-items-center text-center px-4 d-flex flex-row justify-content-between border border-0"
					key={index}
					style={styles}
				>
					<h4 className="w-25">{dato?.date}</h4>
					<span className="fw-medium w-75 text-white">
						<i class="bi bi-arrow-up"></i>
						{dato?.tempMax.toFixed(1)} °C / {dato?.tempMin.toFixed(1)} °C
						<i class="bi bi-arrow-down"></i>
					</span>
				</Card>
			))}
		</div>
	);
};

export default CardsPrevisioni;
