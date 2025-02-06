import Link from "next/link";
import { Container } from "react-bootstrap";
import Image from "next/image";

export default function Nav() {
  return (
    <div className="header-navbar">
      <Container>
        <div className="text-uppercase">
          <Link href="/">
            <Image
              src="/images/icons/logo.svg"
              alt="logo"
              width={240}
              height={60}
            />
          </Link>
        </div>
      </Container>
    </div>
  );
}
