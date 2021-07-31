import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Image,
  Row,
} from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { getCookie, removeCookie } from "../hooks/cookie";
const Header: React.FC<any> = (props) => {
  const history = useHistory();
  const [token, setToken] = useState(getCookie("myToken"));
  const location = useLocation<any>();
  useEffect(() => {
    if (location.state) {
      setToken(location.state.tk);
    }
  }, [location]);
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Image
          src="../tempImages/NFT_Icon.png"
          fluid
          style={{
            height: "auto",
            width: "auto",
            maxHeight: "72px",
            maxWidth: "50px",
          }}
        />
        <Navbar.Brand
          style={{
            cursor: "pointer",
            alignContent: "center",
            marginRight: "40px",
          }}
          className="AppName"
          onClick={() => {
            history.push("/");
          }}
        >
          크립토그래퍼
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Form className="d-flex ">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                style={{ width: "40vw" }}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
          {token ? (
            <Nav>
              <Nav.Link
                onClick={() => {
                  removeCookie("myToken");
                  setToken(getCookie("myToken"));
                }}
              >
                로그아웃
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                onClick={() => {
                  history.push("/myPage/myToken");
                }}
              >
                마이페이지
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link
                onClick={() => {
                  history.push("/login");
                }}
              >
                로그인
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                onClick={() => {
                  history.push("/registerAccount");
                }}
              >
                회원가입
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
