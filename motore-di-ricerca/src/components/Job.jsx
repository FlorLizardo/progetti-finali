import { Row, Col, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setAzienda } from '../actions/favouriteActions'

const Job = ({ data }) => {
  const dispatch = useDispatch()

  return(
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={1}>
      <Button variant='outline'  style={{width: '5rem'}} onClick={() => dispatch(setAzienda(data.title))} >
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="blueviolet" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
      </Button>
    
    </Col>
    <Col xs={3}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    
    <Col xs={8}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
  </Row>

  )
  }

export default Job
