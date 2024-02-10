import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_AZIENDA } from "../actions/favouriteActions";
import { Link } from "react-router-dom";

const FavouriteCompany = () => {
	const styles = {
		containerFav: {
			minHeight: "100vh",
		},
		title: {
			color: "#BF5353",
		},
		listGroup: {
			height: "77vh",
		},
		deleteFav: {
			cursor: 'pointer'
		}
	};

	const dispatch = useDispatch();
	const favourites = useSelector((state: any) => state.favourite.nomeAzienda); //uso useSelector per 'prendere' lo stato e poi utilizzarlo con dispatch

	return (
		<Container style={styles.containerFav} className="py-5">
			<Row className="mx-auto">
				<Col xs={3}>
					<Link to="/" className="btn btn-outline-secondary mb-3 py-0 px-2 fs-6">
						<i className="bi bi-chevron-double-left"></i>
						Back to Home
					</Link>
				</Col>
			</Row>
			<Row className="mx-auto mt-4">
				<Col
					xs={3}
					className="bg-secondary-subtle d-flex justify-content-center align-items-center"
				>
					<h1 className="mb-3 h1 text-center" style={styles.title}>
						Favourite Jobs
					</h1>
				</Col>
				<Col xs={7}>
					<ListGroup as="ul" style={styles.listGroup} className="overflow-auto px-3">
						{favourites.length > 0 ? (
							favourites.map((fav:string, index:number) => (
								<ListGroup.Item
									as="li"
									key={index}
									className="py-3 my-2 border border-2 rounded rounded-1 d-flex justify-content-between align-items-center fw-medium"
								>
									{fav}
									<a
										className=""
										onClick={() => dispatch({ type: REMOVE_AZIENDA, payload: fav })} //uso dispatch per cambiare lo stato. In questo caso si rimuove l'elemento
									>
										<i className="bi bi-x-square-fill fs-3 text-danger" style={styles.deleteFav}></i>
									</a>
								</ListGroup.Item>
							))
						) : (
							<ListGroup.Item className="fw-medium">Non ci sono preferiti</ListGroup.Item>
						)}
					</ListGroup>
				</Col>
			</Row>
		</Container>
	);
};

export default FavouriteCompany;
