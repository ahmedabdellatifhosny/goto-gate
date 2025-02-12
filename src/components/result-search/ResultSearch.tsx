"use client";
import {
  faArrowRight,
  faCalendarDays,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import MultiCity from "../home/MultiCity";
import OneWay from "../home/OneWay";
import Return from "../home/Return";
import { SetStateAction, useState } from "react";
import dynamic from "next/dynamic";
import Form from "react-bootstrap/Form";
export default function ResultSearch() {
  const [activeTab, setActiveTab] = useState("return");
  const Select = dynamic(() => import("react-select"), { ssr: false });
  const handleTabChange = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };

  interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactNode;
  }

  const Checkbox: React.FC<CheckboxProps> = ({ children, ...props }) => (
    <label>
      <input type="checkbox" {...props} />
      {children}
    </label>
  );
  return (
    <>
      <div className="result-search">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <Container>
                <Row>
                  <Col md={12}>
                    <div className="search-result">
                      <ul className="list-unstyled d-flex gap-3 result-nav">
                        <li>
                          <div className="travel-airport">
                            <span className="ms-3 me-3">Dubai (DXB)</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                            <span className="ms-3 me-3">Abu Dhabi (AUH)</span>
                          </div>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCalendarDays} />{" "}
                          <span>13 Feb</span>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faUser} />
                          <span className="px-2">1</span>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Accordion.Header>
            <Accordion.Body>
              <div className="flight-search-box ">
                <Tabs
                  activeKey={activeTab}
                  onSelect={(tab) => setActiveTab(tab)}
                  id="radio-tabs-example"
                  className="py-3"
                >
                  <Tab
                    eventKey="return"
                    title={
                      <label className="d-flex align-items-center ">
                        <input
                          type="radio"
                          name="tab"
                          value="return"
                          checked={activeTab === "return"}
                          onChange={() => handleTabChange("return")}
                          className="me-2"
                        />
                        Return
                      </label>
                    }
                  >
                    <div className="tab-content">
                      <div className="return">
                        <Return />
                      </div>
                    </div>
                  </Tab>

                  <Tab
                    eventKey="oneway"
                    title={
                      <label className="d-flex align-items-center">
                        <input
                          type="radio"
                          name="tab"
                          value="oneway"
                          checked={activeTab === "oneway"}
                          onChange={() => handleTabChange("oneway")}
                          className="me-2"
                        />
                        One-Way
                      </label>
                    }
                  >
                    <div className="tab-content">
                      <div className="one-way">
                        <OneWay />
                      </div>
                    </div>
                  </Tab>

                  <Tab
                    eventKey="multicity"
                    title={
                      <label className="d-flex align-items-center">
                        <input
                          type="radio"
                          name="tab"
                          value="multicity"
                          checked={activeTab === "multicity"}
                          onChange={() => handleTabChange("multicity")}
                          className="me-2"
                        />
                        Multi-City
                      </label>
                    }
                  >
                    <div className="tab-content">
                      <div className="multi-city">
                        <MultiCity />
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className="content">
        <Container>
          <Row>
            <Col md={4}>
              <div className="search-reult-sidebar my-5">
                <h6>Showing 525 of 525 flights</h6>
              </div>

              <div className="number-of-stops">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Number of Stops</Accordion.Header>
                    <Accordion.Body>
                      <Form>
                        {[
                          "Nonstop flights",
                          "Maximum one stop",
                          "All",
                          "Default radio",
                        ].map((label, index) => (
                          <div key={`radio-${index}`} className="mb-3">
                            <Form.Check
                              type="radio"
                              id={`radio-${index}`}
                              label={label}
                            />
                          </div>
                        ))}
                        <div className="mb-3">
                          <Form.Check
                            type="checkbox"
                            id="checkbox-no-self-transfer"
                            label="Show flights without Self Transfer"
                          />
                        </div>
                      </Form>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              <div className="price-range">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Price</Accordion.Header>
                    <Accordion.Body>
                      <Form>
                        <Form.Range />
                      </Form>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              <div className="airlines">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Airlines</Accordion.Header>
                    <Accordion.Body>
                      <Form>
                        {[
                          "Air Arabia Abu Dhabi",
                          "Emirates Airlines",
                          "Etihad Airways",
                          "Fly Dubai",
                          "Gulf Air",
                          "Jazeera Airways",
                          "Kuwait Airways Corp",
                          "Oman Air",
                          "Salam Air",
                          "Show flights without Self Transfer",
                        ].map((airline, index) => (
                          <div key={`airline-${index}`} className="mb-3">
                            <Form.Check
                              type="checkbox"
                              id={`airline-${index}`}
                              label={airline}
                            />
                          </div>
                        ))}
                      </Form>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              {["Dubai – Kuwait", "Dubai – Kuwait", "Dubai – Kuwait"].map(
                (route, routeIndex) => (
                  <div className="price-range" key={`route-${routeIndex}`}>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>{route}</Accordion.Header>
                        <Accordion.Body>
                          <div className="dep-arr">
                            <Form>
                              {["Departure", "Arrival"].map((label, index) => (
                                <div
                                  key={`dep-arr-${routeIndex}-${index}`}
                                  className="mb-3 d-flex justify-content-start align-items-center gap-5"
                                >
                                  <Form.Check
                                    type="radio"
                                    id={`dep-arr-${routeIndex}-${index}`}
                                    label={label}
                                  />
                                </div>
                              ))}
                            </Form>
                          </div>
                          <Form>
                            <Form.Range />
                          </Form>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                )
              )}
            </Col>

            <Col md={8}>
              <p>travels</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
