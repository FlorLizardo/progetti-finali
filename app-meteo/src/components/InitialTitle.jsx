import { Col } from "react-bootstrap";

const InitialTitle = () => {
	const initialTitle = "Scopri com'è il tempo nella tua città"; //titolo iniziale della pagina
	const styles = {
		backgroundColor: "rgba(71, 156,161, 0.4)",
		width: "70%",
		height: "70vh",
	};

	return (
		<Col xs="12" className="d-flex justify-content-center">
			<div
				className="d-flex align-items-center justify-content-center rounded rounded-4"
				style={styles}
			>
				<h1 className="display-4 text-center">{initialTitle}</h1>
			</div>
		</Col>
	);
};

export default InitialTitle;
