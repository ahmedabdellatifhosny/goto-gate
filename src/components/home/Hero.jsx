"use client";
import { Tabs, Tab } from "react-bootstrap";
import { useState } from "react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("return");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

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
