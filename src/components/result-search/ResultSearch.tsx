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
  );
}
