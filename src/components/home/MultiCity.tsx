import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Select from "react-select";
import { Airports, Passengers, Class } from "./data";
import dynamic from "next/dynamic";
import DatePicker from "react-datepicker";

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
      <div className="multi-title">
        <h4>Trip</h4>
      </div>
      <div className="trips">
        <Container>
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
    </div>
  );
}
