import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import WelcomeSection from "./WelcomeSection";

const MainSearch = () => {
  const styles = {
    minHeight: '100vh'
  }

	const [query, setQuery] = useState("");
	const [jobs, setJobs] = useState([]);

	const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

	const handleChange = (e: any) => {
		setQuery(e.target.value);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		try {
			const response = await fetch(baseEndpoint + query + "&limit=20");
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
		<Container style={styles}>
			<Row>
        <Col xs={8} className="mx-auto my-5">
          <WelcomeSection />
        </Col>
				<Col xs={10} className="mx-auto mb-3 d-flex align-items-center gap-3">
					<h1 className="display-2 fw-normal">Remote Jobs Search</h1>
					<i className="bi bi-search fs-1 text-primary"></i>
				</Col>
				<Col xs={10} className="mx-auto">
					<Form onSubmit={handleSubmit}>
						<Form.Control
							type="search"
							value={query}
							onChange={handleChange}
							placeholder="type and press Enter"
						/>
					</Form>
				</Col>

				<Col xs={10} className="mx-auto my-4">
					{jobs.map((jobData: any) => (
						<Job key={jobData._id} data={jobData} />
					))}
				</Col>
			</Row>
		</Container>
	);
};

export default MainSearch;
