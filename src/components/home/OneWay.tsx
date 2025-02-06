import { Container, Row, Col, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { Airports, Passengers, Class } from "./data";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
export default function OneWay() {
  const Select = dynamic(() => import("react-select"), { ssr: false });
  const [isClearable, setIsClearable] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="one-way">
      <Container>
        <Row>
          <Col md={8}>
            <div className="inputs-search d-flex justify-content-between">
              <div className="reservation-form">
                <div className="from-input">
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    name="color"
                    placeholder="From"
                    options={Airports}
                    isClearable={isClearable}
                  />
                </div>
                <div className="image-arrows">
                  <Image
                    src="/images/icons/arrows.svg"
                    width={30}
                    height={30}
                    alt="arrows"
                  />
                </div>
                <div className="to-form">
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    name="color"
                    placeholder="To"
                    options={Airports}
                    isClearable={isClearable}
                  />
                </div>
              </div>

              <div
                style={{
                  color: "hsl(0, 0%, 40%)",
                  display: "inline-block",
                  fontSize: 12,
                  fontStyle: "italic",
                  marginTop: "1em",
                }}
              ></div>
              <div className="dates d-flex">
                <div className="start">
                  <label>Departure</label>
                  <DatePicker
                    dateFormat="yyyy/MM/dd"
                    selected={startDate}
                    onChange={(date: Date | null) => setStartDate(date)}
                    className="start-date form-control"
                  />
                </div>

                <div className="persons d-flex">
                  <div className="selected-passengers">
                    <label>Passengers</label>
                    <Select
                      className="passengers"
                      classNamePrefix="select"
                      name="color"
                      options={Passengers}
                      placeholder="Passengers"
                    />
                  </div>
                  <div className="selected-class">
                    <label>Class</label>
                    <Select
                      className="class"
                      classNamePrefix="select"
                      name="color"
                      options={Class}
                      placeholder="Class"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="right-search text-center d-flex flex-column">
              <div className="submit-form ">
                <Button variant="primary" className="text-capitalize">
                  search flights
                </Button>
              </div>
              <div className="nostop text-center">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Nonstop flights only" />
                  </Form.Group>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
