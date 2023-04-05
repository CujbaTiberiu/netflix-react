import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function MyNav() {
  return (
    <Navbar
      bg="black"
      expand="md"
      sticky="top"
      variant="dark"
      className="navbar-dark"
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            className="img__logo"
            src="https://tse1.mm.bing.net/th/id/OIP.TTCgnTjm3-P-qjGSCmgBCAHaEH?w=320&h=180&c=7&r=0&o=5&pid=1.7"
            alt="logo"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-white fs-5">
            <Link className="text-white nav-link" to="/">
              Home
            </Link>
            <Link className="text-white nav-link" to="/tv-shows">
              Tv Shows
            </Link>
            <Nav.Link className="text-white" href="#link">
              Movies
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              Recently Added
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              My List
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <ul className="navbar-nav" id="navNone">
          <li className="nav-item ">
            <a
              className="nav-link active text-white"
              aria-current="page"
              href="_void"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-search icon"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white fs-5" href="_void">
              User
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="_void">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-bell-fill icon"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
              </svg>
            </a>
          </li>
          <li className="nav-item">
            <div className="btn-group">
              <button
                type="button"
                className="btn dropdown-toggle text-secondary border-0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png"
                  alt="logo"
                  id="avatar"
                />
              </button>
            </div>
          </li>
        </ul>
      </Container>
    </Navbar>
  );
}

export default MyNav;
