import { Container, Table, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await axios("http://localhost:9090/api/v1/employees")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  if (loading)
    return (
      <Container>
        <h5 style={{ margin: 20, marginTop: 40 }}>Loading...</h5>
      </Container>
    );
  if (error)
    return (
      <Container>
        <h5 style={{ margin: 20, marginTop: 40 }}>
          An error occured, please refresh
        </h5>
      </Container>
    );

  return (
    <>
      <Container style={{ textAlign: "left" }}>
        <h1 style={{ marginTop: 12 }}>Welcome Home!</h1>
        <h3 style={{ marginTop: 12, fontWeight: 300 }}>
          There are currently {data.length} employees.{" "}
          {data.length > 0 ? "Add another?" : "Let's add one!"}
        </h3>
        <Link
          to={{
            pathname: "/add",
          }}
        >
          <Button variant="primary">Add Employee</Button>
        </Link>
        <Table
          style={{ marginTop: 20, textAlign: "left" }}
          variant="dark"
          className="dark-bg"
        >
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th style={{ textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee) => (
              <tr key={employee._id}>
                {/* <td>{employee._id}</td> */}
                <td>{employee.firstname}</td>
                <td>{employee.lastname}</td>
                <td>{employee.emailId}</td>
                <td style={{ textAlign: "right" }}>
                  <Link
                    to={{
                      pathname: "/info",
                      state: employee,
                    }}
                  >
                    <Button variant="primary">View</Button>
                  </Link>{" "}
                  <Link
                    to={{
                      pathname: "/edit",
                      state: employee,
                    }}
                  >
                    <Button variant="warning">Edit</Button>
                  </Link>{" "}
                  <Link
                    to={{
                      pathname: "/delete",
                      state: employee,
                    }}
                  >
                    <Button variant="danger">Delete</Button>
                  </Link>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
