import {
  Container,
  Form,
  Button,
  InputGroup,
  FormControl,
  Alert,
} from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Add() {
  const [email, setEmail] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  const [resp, setResp] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      firstName: first,
      lastName: last,
      emailId: email,
    };

    axios
      .post("http://localhost:9090/api/v1/employees", data)
      .then((response) => {
        console.log(response.data);
        setResp(true);
        console.log("SENT");
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(true);
      });
  };

  return (
    <>
      <Container style={{ textAlign: "left" }}>
        <h1 style={{ textAlign: "left", marginTop: 12, marginBottom: 12 }}>
          Add Employee
        </h1>
        <Alert show={resp} variant="success">
          <Alert.Heading>Successfully added Employee</Alert.Heading>
          <p>
            The employee has been added to the database. You may now return home
            or add another employee.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Link
              to={{
                pathname: "/",
              }}
            >
              <Button variant="outline-success">Home</Button>
            </Link>
            <Button
              style={{ marginLeft: 4 }}
              onClick={() => setResp(false)}
              variant="outline-secondary"
            >
              Close
            </Button>
          </div>
        </Alert>
        <Alert show={error} variant="danger">
          <Alert.Heading>Invalid Email entered</Alert.Heading>
          <p>
            Please confirm that the entered email address is valid. Don't forget
            the '@'
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setError(false)} variant="outline-danger">
              Close
            </Button>
          </div>
        </Alert>
        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="email">Email</InputGroup.Text>
            <FormControl
              aria-label="email"
              aria-describedby="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="firstname">First Name</InputGroup.Text>
            <FormControl
              aria-label="firstname"
              aria-describedby="firstname"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="lastname">Last Name</InputGroup.Text>
            <FormControl
              aria-label="lastname"
              aria-describedby="lastname"
              value={last}
              onChange={(e) => setLast(e.target.value)}
              required
            />
          </InputGroup>

          <Button type="submit" variant="primary">
            Add
          </Button>

          {"  "}
          <Link
            to={{
              pathname: "/",
            }}
          >
            <Button variant="secondary">Cancel</Button>
          </Link>
        </Form>
      </Container>
    </>
  );
}
