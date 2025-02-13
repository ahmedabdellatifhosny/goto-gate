import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default function Tickets() {
  return (
    <div className="tickets">
      <Link href={"#"}>
        <Container>
          <Row>
            <Col md={9}>
              <div className="departure-box">
                <div className="type-trip">
                  <ul className="list-unstyled d-flex justify-content-start gap-3 ">
                    <li className="fw-bold">
                      <span>Departure</span>
                    </li>
                    <li>
                      <span className="date">Feb 14</span>
                    </li>
                    <li>
                      <span className="class"></span> . Economy
                    </li>
                  </ul>
                </div>
                <div className="trip-details ">
                  <ul className="list-unstyled d-flex justify-content-between align-items-center  ">
                    <li>
                      <div>
                        <p className="time">03:40</p>
                        <p className="airport">DXB Dubai</p>
                      </div>
                    </li>
                    <li>
                      <div className="duration">
                        <p>7h 5min </p>
                        <FontAwesomeIcon icon={faArrowRight} />
                        <p>Nonstop flights</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <p className="time">03:40</p>
                        <p className="airport">DXB Dubai</p>
                      </div>
                    </li>
                    <li>
                      <div className="logo">
                        <Image
                          src={"/images/air-logo/airport-logo.png"}
                          width={40}
                          height={40}
                          alt="logo"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="return-box">
                <div className="type-trip">
                  <ul className="list-unstyled d-flex justify-content-start gap-3 ">
                    <li className="fw-bold">
                      <span>Return</span>
                    </li>
                    <li>
                      <span className="date">Feb 14</span>
                    </li>
                    <li>
                      <span className="class"></span> . Economy
                    </li>
                  </ul>
                </div>
                <div className="trip-details ">
                  <ul className="list-unstyled d-flex justify-content-between align-items-center  ">
                    <li>
                      <div>
                        <p className="time">03:40</p>
                        <p className="airport">DXB Dubai</p>
                      </div>
                    </li>
                    <li>
                      <div className="duration">
                        <p>7h 5min </p>
                        <FontAwesomeIcon icon={faArrowRight} />
                        <p>Nonstop flights</p>
                        <p className="self-transfer fw-bold">
                          <Image
                            src="/images/icons/self.svg"
                            width={20}
                            height={20}
                            alt="self"
                          />
                          Self-transfer
                        </p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <p className="time">03:40</p>
                        <p className="airport">DXB Dubai</p>
                      </div>
                    </li>
                    <li>
                      <div className="logo">
                        <Image
                          src={"/images/air-logo/airport-logo-2.png"}
                          width={40}
                          height={40}
                          alt="logo"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="view-trip ">
                {["left"].map((placement) => (
                  <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                      <Tooltip id={`tooltip-${placement}`}>
                        Tooltip on {placement}
                      </Tooltip>
                    }
                  >
                    <Button variant="secondary" className="w-100">
                      Tooltip on {placement}
                    </Button>
                  </OverlayTrigger>
                ))}

                <div className="hurry py-3 fw-bold">Hurry! Only 1 seat at this price!</div>
                <div className="price py-3">
                  <p className="fw-bold fs-3 mb-0 ">US$2,019.10</p>
                  <p className="fs-6 text-end pe-2">Price per adult</p>
                </div>
                <div className="view-button">
                  <Button variant="primary" className="w-100">
                    view trip
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Link>
    </div>
  );
}
