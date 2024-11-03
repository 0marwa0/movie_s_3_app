import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Drawer from "react-modern-drawer";
import { FaHeart } from "react-icons/fa";
import "react-modern-drawer/dist/index.css";

import "./navbar.css";
function NavbarUi() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>MovieApp</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav_item mx-4" to="/">
              Home
            </Link>{" "}
            <Link className="nav_item mx-4" to="/movies">
              Movies
            </Link>
            <Link>
              <FaHeart color="red" onClick={() => setOpen(true)} />
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        direction="right"
        className="bla bla bla"
      >
        <div>Hello World</div>
      </Drawer>
    </div>
  );
}
export default NavbarUi;
