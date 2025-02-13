"use client";
import { Container, Row, Col, Button, Collapse } from "react-bootstrap";
import Sidebar from "../../components/layout/Sidebar";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { JSX, useState } from "react";
import Image from "next/image";
import { faCalendarDays, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function Page(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

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
              <FontAwesomeIcon icon={faChevronUp} />
            </li>
          </ul>
        </Button>
      </div>
      <div className="content">
        <Container>
          <Collapse in={open} className="py-2">
            <div id="example-collapse-text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
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
