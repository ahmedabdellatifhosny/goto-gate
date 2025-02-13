"use client";

import {
  Container,
  Row,
  Col,
  Button,
  Collapse,
  Dropdown,
} from "react-bootstrap";
import Sidebar from "../../components/layout/Sidebar";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { JSX, SetStateAction, useState } from "react";
import Image from "next/image";
import { faCalendarDays, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import MultiCity from "../../components/home/MultiCity";
import OneWay from "../../components/home/OneWay";
import Return from "../../components/home/Return";
import Tickets from "../../components/Tickets";

export default function Page(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState("return");

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
    <section className="travels">
      <div className="search-result">
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          <ul className="searched-details list-unstyled d-flex gap-4">
            <li>
              <span>dubai(dxb)</span>
              <Image
                src="/images/icons/arrows.svg"
                width={20}
                height={20}
                alt="arrow"
              />
              <span>kuwait(kwi)</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendarDays} />
              <span>Feb 13 – Feb 19</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faUser} /> <span>1</span>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faChevronUp}
                className={`chevron-icon ${open ? "rotate" : ""}`}
              />
            </li>
          </ul>
        </Button>
      </div>
      <div className="content">
        <Container>
          <Collapse in={open} className="py-2">
            <div id="example-collapse-text">
              <div className="flight-search-box rounded">
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
            </div>
          </Collapse>
          <Row>
            <Col md={4}>
              <Sidebar />
            </Col>
            <Col md={8} className="my-5">
              <div className="nav-tab">
                <Tabs
                  defaultActiveKey="bestvalue"
                  id="justify-tab-example"
                  className="mb-3"
                  justify
                >
                  <Tab
                    eventKey="bestvalue"
                    title={
                      <div className="best-value d-flex flex-column justify-content-start align-items-center">
                        <h6>Best Value</h6>
                        <small>US$661.12</small>
                      </div>
                    }
                  >
                    <Tickets />
                  </Tab>

                  <Tab
                    eventKey="cheapset"
                    title={
                      <div className="cheapset">
                        <h6>Cheapest</h6>
                        <small>US$661.12</small>
                      </div>
                    }
                  >
                    <Tickets />
                  </Tab>

                  <Tab
                    eventKey="shorterflighttime"
                    title={
                      <div className="shorter">
                        <h6>Shorter Flight Time</h6>
                        <small>US$661.12</small>
                      </div>
                    }
                  >
                    <Tickets />
                  </Tab>

                  <Tab
                    eventKey="more"
                    title={
                      <div className="more-menu">
                        <Dropdown as="div">
                          <Dropdown.Toggle
                            as="div"
                            className="dropdown-toggle-custom"
                          >
                            More Options
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              <h6>Shorter Flight Time</h6>
                              <small>US$661.12</small>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              <h6>Shorter Flight Time</h6>
                              <small>US$661.12</small>
                            </Dropdown.Item>
                            {/* <Dropdown.Item href="#/action-3">
                              Something else
                            </Dropdown.Item> */}
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    }
                  ></Tab>
                </Tabs>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
