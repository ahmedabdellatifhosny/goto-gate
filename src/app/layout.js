import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/sass/styles.css";

export const metadata = {
  title: "Book Cheap Flights with Gotogate",
  description:
    "Find the best deals on flights, hotels, car rentals, and more with a platform designed to simplify the booking process and enhance your next travel experience.",
  icons: {
    icon: {
      url: "/images/icons/favicon.ico",
      type: "image/favicon",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
