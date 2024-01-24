import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_AZIENDA } from "../actions/favouriteActions";
import { Link } from "react-router-dom";

const FavouriteCompany = () => {
	const dispatch = useDispatch();
	const favourites = useSelector(state => state.favourite.nomeAzienda);

	return (
		<Container>
			<Row>
				<Col>
					<h1>Preferiti</h1>
					<Link to="/" className="btn btn-primary">
						Ritorna alla Home
					</Link>
				</Col>
				<Col>
					<ListGroup>
						{favourites.length > 0 ? (
							favourites.map((fav, index) => (
								<ListGroup.Item key={index}>
									<Button
										className="btn btn-danger"
										onClick={() => dispatch({ type: REMOVE_AZIENDA, payload: fav })}
									>
										Delete
									</Button>
									{fav}
								</ListGroup.Item>
							))
						) : (
							<ListGroup.Item>Non ci sono preferiti</ListGroup.Item>
						)}
					</ListGroup>
				</Col>
			</Row>
		</Container>
	);
};

export default FavouriteCompany;
