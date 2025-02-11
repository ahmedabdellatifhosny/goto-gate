import {
  faArrowRight,
  faCalendarDays,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
export default function ResultSearch() {
  return (
    <div className="result-search">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <Container>
              <Row>
                <Col md={12}>
                  <div className="search-result">
                    <ul className="list-unstyled d-flex gap-3">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
