import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

export default function Features() {
  return (
    <div className="features py-5">
      <Container>
        <Row>
          <Col md={4}>
            <Image
              src="/images/icons/money.svg"
              width={38}
              height={38}
              alt="money"
            />
            <span className="ms-3">Wide selection</span>
          </Col>
          <Col md={4}>
            <Image
              src="/images/icons/checkhand.svg"
              width={38}
              height={38}
              alt="money"
            />
            <span className="ms-3">Trusted by 30M passengers a year</span>
          </Col>
          <Col md={4}>
            <Image
              src="/images/icons/earth.svg"
              width={38}
              height={38}
              alt="money"
            />
            <span className="ms-3">Over 20 years of experience</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
