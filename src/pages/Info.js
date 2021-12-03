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
              <th>
                <h5>ID</h5>
              </th>
              <th>
                <h5>First Name</h5>
              </th>
              <th>
                <h5>Last Name</h5>
              </th>
              <th>
                <h5>Email</h5>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ fontWeight: 300 }}>
              <td>
                <h4>{employee._id}</h4>
              </td>
              <td>
                <h4>{employee.firstname}</h4>
              </td>
              <td>
                <h4>{employee.lastname}</h4>
              </td>
              <td>
                <h4>{employee.emailId}</h4>
              </td>
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
