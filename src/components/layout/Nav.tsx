import Link from "next/link";
import { Container } from "react-bootstrap";
import Image from "next/image";

export default function Nav() {
  return (
    <div className="header-navbar position-fixed w-100">
      <Container>
        <div className="text-uppercase">
          <Link href="/">
            <Image
              src="/images/icons/logo.svg"
              alt="logo"
              width={140}
              height={60}
            />
          </Link>
        </div>
      </Container>
    </div>
  );
}
