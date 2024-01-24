import { Container, Row, Col, Card } from "react-bootstrap"
import InputMeteo from "../components/InputMeteo"
import { useState } from "react"
import ResultsSearch from "../components/ResultsSearch"
import AlertError from "../components/AlertError"
import InitialTitle from "../components/InitialTitle"
import { weather } from "../actions/fetchWeatherActions"
import { useDispatch, useSelector } from "react-redux"
import { isErrorActions } from "../actions/alertErrorActions"

const Home = () => {
    const styles = {
		container: {
			marginTop: "3rem",
      minHeight: '100vh'
		},
	};

  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const error = useSelector(state => state.errorReducer.isError);
  const weatherData = useSelector(state => state.fetchWeather)
 

  const myFetchWeather = async () => { //fetch dei dati del giorno
    try{
      const resp = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=a829039625b8c3a5900bfd0863a4c234&lang=it&units=metric`
      );
      const data = await resp.json();
      dispatch(weather(data))
      dispatch(isErrorActions(false)) //gestione dell'errore
    }
    catch(err) {
      dispatch(isErrorActions(true))
      console.log(err);
    }
	};

 
  return (
    <>
      <Container fluid style={styles.container}>
        <Row>
          {error && <AlertError />} {/*se 'error' è true appare l'alert */}
          <Col xs='12' className="d-flex justify-content-center mb-5">
            <InputMeteo myFetchWeather={myFetchWeather} search={search} setSearch={setSearch}/>
          </Col>
          </Row>
          <Row>
              {weatherData.fetchWeather.id ? (
                <>
                <ResultsSearch /> {/* componente con i risultati della ricerca */}
                </>
             ) 
             : (
              <InitialTitle /> //componente del titolo iniziale della pagina
             )}
             </Row>       
      </Container>
    </>
  )
}

export default Home