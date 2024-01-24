import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setAzienda, setRemoveAzienda } from "../actions/favouriteActions";
import { useState } from "react";

const Job = ({ data }) => {
	const dispatch = useDispatch();
  const favSelected = useSelector(state => state.favourite.nomeAzienda);

  const toggleFav = () => {
    if(favSelected.includes(data.title)) {
      dispatch(setRemoveAzienda(data.title))
    }else {
      dispatch(setAzienda(data.title))
    }
  }

	return (
		<Row
			className="mx-0 mt-3 p-3"
			style={{ border: "1px solid #00000033", borderRadius: 4 }}
		>
			
			<Col xs={5}>
				<Link to={`/${data.company_name}`} className="text-decoration-none text-dark fw-bold">{data.company_name}</Link>
			</Col>

			<Col xs={6}>
				<a href={data.url} target="_blank" rel="noreferrer" className="text-decoration-none text-secondary fw-bold">
					{data.title}
				</a>
			</Col>
      <Col xs={1} className="d-flex justify-content-center">
				<a
					onClick={toggleFav} style={{cursor: 'pointer'}}
				>
          {!favSelected.includes(data.title) && <i class="bi bi-plus-square-fill fs-3 text-primary"></i>}
          {favSelected.includes(data.title) && <i class="bi bi-dash-square-fill fs-3 text-danger"></i>}          
				</a>
			</Col>
		</Row>
	);
};

export default Job;
