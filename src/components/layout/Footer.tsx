import Image from "next/image";
export default function Footer() {
  return (
    <div className="footer py-3">
      <div className="payments d-flex justify-content-center mx-auto h-100  py-4 my-3 rounded">
        <ul className="list-unstyled d-flex gap-2 justify-content-center align-items-center mb-0">
          <li>
            <Image
              src="/images/icons/visa.svg"
              alt="logo"
              width={117}
              height={30}
            />
          </li>
          <li>
          <Image
              src="/images/icons/mastercard.svg"
              alt="logo"
              width={82}
              height={30}
            />
          </li>
          <li>
          <Image
              src="/images/icons/jcb.svg"
              alt="logo"
              width={91}
              height={30}
            />
          </li>
          <li>
          <Image
              src="/images/icons/applepay.svg"
              alt="logo"
              width={63}
              height={30}
            />
          </li>
        </ul>
      </div>
      <div className="copyright text-center">
        <p className="mb-0">
          <span className="fw-bold">Gotogate</span> / Gotogate, Inc. Miami, Florida 33137, USA
        </p>
        <p className="mb-0">© 2025 Gotogate. All Rights Reserved.</p>
      </div>
    </div>
  );
}
