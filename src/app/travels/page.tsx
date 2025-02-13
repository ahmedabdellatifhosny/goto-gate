"use client";

import { Container, Row, Col, Button, Collapse } from "react-bootstrap";
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
import dynamic from "next/dynamic";

export default function Page(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
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
            <Col md={8}>
              <Tabs
                defaultActiveKey="home"
                id="justify-tab-example"
                className="mb-3"
                justify
              >
                <Tab eventKey="home" title="Home">
                  Tab content for Home
                </Tab>
                <Tab eventKey="profile" title="Profile">
                  Tab content for Profile
                </Tab>
                <Tab eventKey="longer-tab" title="Loooonger Tab">
                  Tab content for Loooonger Tab
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                  Tab content for Contact
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
