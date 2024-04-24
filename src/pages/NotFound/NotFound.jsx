import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

export default function NotFound() {
  return (
    <div style={{ backgroundColor: "var(--off-white)" }}>
      <Container>
        <Row>
          <div>
            <Image
              className="bg-light "
              style={{ margin: "100px auto" }}
              src="./assets/images/404.svg"
              alt="404"
            />
            <h1 className="text-center mt-3">Oops! Page not found</h1>
          </div>
        </Row>
      </Container>
    </div>
  );
}
