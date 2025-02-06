import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Button, Container } from "react-bootstrap";

export default function Page() {
  return (
    <section className="special-provisions ">
      <Container>
        <div className="print text-end p-5">
          <Button variant="dark">
            <FontAwesomeIcon
              icon={faPrint}
              style={{ width: "15px", marginRight: "10px" }}
            />
            <span>print this page </span>
          </Button>
        </div>
        <h2 className="text-uppercase"> general terms and conditions</h2>

        <p>
          <strong>important:</strong> please read all of the following general
          terms and conditions (these “t&cs”), carefully. these t&cs contain
          important information regarding your legal rights, remedies and
          obligations. these include (but are not limited to) various
          limitations and exclusions, a binding arbitration clause, a class
          action waiver, a clause that governs the jurisdiction and venue of
          disputes, and obligations to comply with applicable laws and
          regulations.
        </p>
        <p>
          These general terms and conditions (“T&Cs”) apply between you (“You”
          or the “Customer”) and Gotogate, Inc. (“We” or “Us”), the intermediary
          company of flights and flight related services offered on the booking
          portal provided by Booking.com BV (hereinafter referred to as the
          “Flight Portal”).
        </p>
        <p>
          You must be at least 18 years of age and act in your role as a private
          consumer to make a booking request for flights and flight related
          services on the Flight Portal. A private consumer is, as opposed to a
          business, a natural person who enters into a legal transaction for
          purposes which are predominantly outside its commercial and/or
          self-employed activities.
        </p>
        <p>
          Your contractual partner for flights and flight related services is:
        </p>
        <h4>Gotogate, Inc. (Gotogate)</h4>
        <address>
          <p>4300 Biscayne Blvd</p>
          <p>Suite 203</p>
          <p>Miami, Florida 33137</p>
          <p>USA</p>
        </address>
        <div className="contact-info d-block text-capitalize">
          <p>Please note that in-person customer support is not available</p>
          <p>
            <strong> email :</strong>
            <Link href="mailto:V8E5x@example.com" className="cslink mx-2">
              customerservice@flightsonbooking.gotogate.support
            </Link>
          </p>

          <p>
            <strong>Telephone : </strong> <span>+1 917 421 7240</span>
          </p>

          <div className="table-content">
            <h3 className="fw-bold">Table of contents</h3>
            <ul className="text-uppercase">
              <li>
                <Link href={"#1"}>scope of services</Link>
              </li>
              <li>
                <Link href={"#2"}>booking process and contact information</Link>
              </li>
              <li>
                <Link href={"#3"}>mediation of flights</Link>
              </li>
              <li>
                <Link href={"#4"}>mediation of insurances</Link>
              </li>
              <li>
                <Link href={"#5"}>
                  special provisions for the mediation of bookings of multiple
                  services
                </Link>
              </li>
              <li>
                <Link href={"#6"}>
                  information on passport, visa and health provisions
                </Link>
              </li>
              <li>
                <Link href={"#7"}>our own services</Link>
              </li>
              <li>
                <Link href={"#8"}>charges and payment</Link>
              </li>
              <li>
                <Link href={"#9"}>claims</Link>
              </li>
              <li>
                <Link href={"#10"}>
                  customer rights pursuant to regulations by the european union
                  and the united states department of transportation
                </Link>
              </li>
              <li>
                <Link href={"#11"}>user conduct</Link>
              </li>
              <li>
                <Link href={"#12"}>liability</Link>
              </li>
              <li>
                <Link href={"#13"}>governing law and dispute resolution</Link>
              </li>
              <li>
                <Link href={"#14"}>data protection</Link>
              </li>
              <li>
                <Link href={"#15"}>intellectual property</Link>
              </li>
              <li>
                <Link href={"#16"}>indemnification</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
