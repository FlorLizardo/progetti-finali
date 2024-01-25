import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { Link, useParams } from "react-router-dom";

const CompanySearchResults = () => {
  const styles = {
    containerPosting: {
      minHeight: '95vh'
    },
    colorJob: {
      color: '#BF5353'
    }
  }

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
    <Container className="mt-4" style={styles.containerPosting}>
      <Row>
      <Col xs={3}>
					<Link to="/" className="btn btn-outline-secondary mb-2 py-0 px-2 fs-6">
						<i class="bi bi-chevron-double-left"></i>
						Back to Home
					</Link>
				</Col>
        <Col xs={10} className="my-4">
          <h1 className="display-4 mb-5"><span className="fw-normal">Job posting for: </span><span style={styles.colorJob}>{params.company}</span></h1>
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
