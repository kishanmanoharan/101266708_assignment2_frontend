import { Nav, Navbar, Container } from "react-bootstrap";

const KNavbar = () => (
  <div className="navbar-container">
    <Navbar bg="primary" variant="dark" className="navbar" sticky="top">
      <Container>
        <Navbar.Brand href="/">Employees</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" className="me-auto" defaultActiveKey="/">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);

export default KNavbar;
