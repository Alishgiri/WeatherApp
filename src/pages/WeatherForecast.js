import React from "react";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import { inject, observer } from "mobx-react";
import ArrowBack from "@material-ui/icons/ArrowBack";
import { Col, Container, Row } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import ArrowForward from "@material-ui/icons/ArrowForward";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import InfoCard from "../components/weather_forecast/InfoCard";
import LoadingPlaceholder from "../components/LoadingPlaceholder";
import LoadingCard from "../components/weather_forecast/LoadingCard";

@inject("weatherStore")
@observer
class WeatherForecast extends React.Component {
  componentDidMount() {
    const {
      weatherStore: { fetchWeatherData },
    } = this.props;
    fetchWeatherData();
  }

  render() {
    const {
      weatherStore: {
        isCelcius,
        isRefreshing,
        onVisibleDateBack,
        visibleWeatherData,
        onVisibleDateForward,
        toggleCelciusFarenheit,
      },
    } = this.props;
    return !visibleWeatherData ? (
      <LoadingPlaceholder />
    ) : (
      <Container fluid>
        <h1 className="mt-3">Weather Forecast</h1>
        <Paper className="p-3 p-md-5 mt-4">
          <Row>
            <Col className="d-flex justify-content-center">
              <FormControlLabel
                value="celcius"
                label="Celcius"
                checked={isCelcius}
                control={<Radio />}
                onChange={(v) => toggleCelciusFarenheit(true)}
              />
            </Col>
            <Col className="d-flex justify-content-center">
              <FormControlLabel
                value="fahrenheit"
                label="Fahrenheit"
                control={<Radio />}
                checked={!isCelcius}
                onChange={(v) => toggleCelciusFarenheit(false)}
              />
            </Col>
          </Row>
          <Row className="d-flex my-3 justify-content-between">
            <IconButton size="medium" onClick={() => onVisibleDateBack()}>
              <ArrowBack />
            </IconButton>
            <IconButton size="medium" onClick={() => onVisibleDateForward()}>
              <ArrowForward />
            </IconButton>
          </Row>
          {isRefreshing ? (
            <Row>
              <Col>
                <LoadingCard isCelcius={isCelcius} />
              </Col>
              <Col>
                <LoadingCard isCelcius={isCelcius} />
              </Col>
              <Col>
                <LoadingCard isCelcius={isCelcius} />
              </Col>
            </Row>
          ) : (
            <Row>
              {visibleWeatherData.map((item, i) => {
                const dt = item.dt;
                const jsDate = new Date(dt * 1000);
                return (
                  <Col key={dt}>
                    <InfoCard
                      temp={item.main.temp}
                      isCelcius={isCelcius}
                      humidity={item.main.humidity}
                      convertedDate={jsDate.toDateString()}
                    ></InfoCard>
                  </Col>
                );
              })}
            </Row>
          )}
        </Paper>
      </Container>
    );
  }
}

export default WeatherForecast;