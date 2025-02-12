"use client";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";

export default function Sidebar() {
  return (
    <section className="sidebar">
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
    </section>
  );
}
