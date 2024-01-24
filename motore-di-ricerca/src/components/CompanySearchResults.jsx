import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { Link, useParams } from "react-router-dom";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Link to='/' className="btn btn-warning">
          <i className="bi bi-arrow-left-square fs-4"></i>
          </Link>
          </Col>
        <Col className="my-4">
          <h1 className="display-4 mb-5"><span className="fw-normal">Job posting for: </span>{params.company}</h1>
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
