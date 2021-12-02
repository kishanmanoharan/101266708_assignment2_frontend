import { Container, Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Delete(props) {
  console.log(props.location.state);
  const employee = props.location.state;

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .delete("http://localhost:9090/api/v1/employees/" + employee._id)
      .then((response) => {
        console.log(response.data);
        console.log("SENT");
        props.history.push("/");
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <>
      <Container style={{ textAlign: "left" }}>
        <h1 style={{ textAlign: "left", marginTop: 12, marginBottom: 12 }}>
          Delete Employee
        </h1>
        <h3>
          Are you sure you want to delete {employee.firstname}{" "}
          {employee.lastname}
        </h3>
        <hr />
        <Button onClick={handleSubmit} variant="danger">
          Delete
        </Button>{" "}
        <Link
          to={{
            pathname: "/",
          }}
        >
          <Button variant="secondary">Cancel</Button>
        </Link>
      </Container>
    </>
  );
}
