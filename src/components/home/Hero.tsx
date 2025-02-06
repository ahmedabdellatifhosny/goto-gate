"use client";
import { Tabs, Tab, Col, Container, Row, Button } from "react-bootstrap";
import { SetStateAction, useState } from "react";
import { Airports } from "../home/data";
import dynamic from "next/dynamic";
import Image from "next/image";

export default function Hero() {
  const Select = dynamic(() => import("react-select"), { ssr: false });
  const [activeTab, setActiveTab] = useState("return");

  const handleTabChange = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };

  interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactNode;
  }

  const Checkbox: React.FC<CheckboxProps> = ({ children, ...props }) => (
    <label style={{ marginRight: "1em" }}>
      <input type="checkbox" {...props} />
      {children}
    </label>
  );

  const [isClearable, setIsClearable] = useState(true);

  return (
    <div className="hero">
      <div className="flight-search-box mx-auto rounded">
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
              <div className="return ">
                <Container>
                  <Row>
                    <Col md={8}>
                      <div className="inputs-search d-flex justify-content-between">
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

                        <div
                          style={{
                            color: "hsl(0, 0%, 40%)",
                            display: "inline-block",
                            fontSize: 12,
                            fontStyle: "italic",
                            marginTop: "1em",
                          }}
                        ></div>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="submit-form text-center">
                        <Button variant="primary" className="text-capitalize">
                          search flights
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Container>
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
            <div className="tab-content">Tab content for One-Way</div>
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
            <div className="tab-content">Tab content for Multi-City</div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
