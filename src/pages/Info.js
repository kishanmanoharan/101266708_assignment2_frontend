import { Container, Table, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Info(props) {
  console.log(props.location.state);
  const employee = props.location.state;

  return (
    <>
      <Container style={{ textAlign: "left" }}>
        <h1 style={{ textAlign: "left", marginTop: 12, marginBottom: 12 }}>
          View Employee
        </h1>
        <Table
          style={{ marginTop: 20, textAlign: "left" }}
          variant="dark"
          className="dark-bg"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{employee._id}</td>
              <td>{employee.firstname}</td>
              <td>{employee.lastname}</td>
              <td>{employee.emailId}</td>
            </tr>
          </tbody>
        </Table>
        <Link
          to={{
            pathname: "/",
          }}
        >
          <Button variant="primary">Back Home</Button>
        </Link>
      </Container>
    </>
  );
}
