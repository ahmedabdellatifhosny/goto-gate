"use client";
import { Tabs, Tab } from "react-bootstrap";
import { SetStateAction, useState } from "react";

import Return from "./Return";
import OneWay from "./OneWay";
import MultiCity from "./MultiCity";

export default function Hero() {
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
  );
}
