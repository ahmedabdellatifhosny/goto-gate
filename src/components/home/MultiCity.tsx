import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import Select from "react-select";
import { Airports, Passengers, Class } from "./data";
import dynamic from "next/dynamic";
import DatePicker from "react-datepicker";
import { faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MultiCity() {
  interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactNode;
  }

  const Checkbox: React.FC<CheckboxProps> = ({ children, ...props }) => (
    <label>
      <input type="checkbox" {...props} />
      {children}
    </label>
  );

  const [startDate, setStartDate] = useState(new Date());
  const [isClearable, setIsClearable] = useState(true);
  const Select = dynamic(() => import("react-select"), { ssr: false });
  return (
    <div className="multi-city">
      <div className="trips">
        <Container>
          <div className="multi-title">
            <h5>Trip</h5>
          </div>
          <Row>
            <Col md={4}>
              <div className="from">
                <label>From</label>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  isClearable={isClearable}
                  name="color"
                  options={Airports}
                  placeholder="From"
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="to">
                <label>to</label>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  isClearable={isClearable}
                  name="color"
                  options={Airports}
                  placeholder="To"
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="dates d-flex">
                <div className="departure">
                  <label>Departure</label>
                  <DatePicker
                    dateFormat="yyyy/MM/dd"
                    selected={startDate}
                    onChange={(date: Date | null) => setStartDate(date)}
                    className="start-date form-control"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="trips">
        <Container>
          <div className="multi-title">
            <h5>Trip</h5>
          </div>
          <Row>
            <Col md={4}>
              <div className="from">
                <label>From</label>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  isClearable={isClearable}
                  name="color"
                  options={Airports}
                  placeholder="From"
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="to">
                <label>to</label>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  isClearable={isClearable}
                  name="color"
                  options={Airports}
                  placeholder="To"
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="dates d-flex">
                <div className="departure">
                  <label>Departure</label>
                  <DatePicker
                    dateFormat="yyyy/MM/dd"
                    selected={startDate}
                    onChange={(date: Date | null) => setStartDate(date)}
                    className="start-date form-control"
                  />
                </div>
              </div>
            </Col>
          </Row>
          <div className="add-trip">
            <Button variant="dark" className="text-capitalize">
              <FontAwesomeIcon icon={faPlus} /> <span> add trip </span>
            </Button>
          </div>
        </Container>
      </div>
      <div className="after-add-trip">
        <Container>
          <div className="trips">
            <Container>
              <div className="multi-title">
                <h5>Trip</h5>
              </div>
              <Row>
                <Col md={4}>
                  <div className="from">
                    <label>From</label>
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      isClearable={isClearable}
                      name="color"
                      options={Airports}
                      placeholder="From"
                    />
                  </div>
                </Col>
                <Col md={4}>
                  <div className="to">
                    <label>to</label>
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      isClearable={isClearable}
                      name="color"
                      options={Airports}
                      placeholder="To"
                    />
                  </div>
                </Col>
                <Col md={4} className="after-trip">
                  <div className="dates d-flex">
                    <div className="departure">
                      <label>Departure</label>
                      <DatePicker
                        dateFormat="yyyy/MM/dd"
                        selected={startDate}
                        onChange={(date: Date | null) => setStartDate(date)}
                        className="start-date form-control"
                      />
                    </div>
                  </div>
                  <Button variant="dark" className="text-capitalize">
                    <FontAwesomeIcon icon={faX} />
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </div>
    </div>
  );
}
