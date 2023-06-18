import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, ButtonGroup, Container } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export default function PizzaTable() {
  function change() {
    console.log("first");
  }
  const [isLoggedIn31, setIsLoggedIn31] = useState(false);
  const navigate31 = useNavigate();

  const handleLogin31 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn31(true);

    // Navigate to the desired route
    navigate31("/SelectItem"); // Example: Navigate to the Admin page after login
  };

  const [isLoggedIn41, setIsLoggedIn41] = useState(false);
  const navigate41 = useNavigate();

  const handleLogin41 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn41(true);

    // Navigate to the desired route
    navigate41("/SelectItem"); // Example: Navigate to the Admin page after login
  };
  const [users, setUsers] = React.useState([]);

  const { id } = useParams();

  React.useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const users = await axios.get("http://localhost:8081/getUsers");
    setUsers(users.data);
    console.log(users.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8081/deleteUser/${id}`);
    loadUsers();
  };
  function change() {
    console.log("first");
  }

  return (
    <Container>
      <h1>we are providing best pizzas</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">id</TableCell>
              <TableCell align="left"> Name</TableCell>
              <TableCell align="left">price</TableCell>
              <TableCell align="left">description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.price}</TableCell>
                <TableCell>{user.description}</TableCell>
                <TableCell align="center">
                  
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={handleLogin31} href="/SelectItem" color="inherit">
        Select Your Pizza
      </Button>

      <Button onClick={handleLogin41} href="/Navbar" color="inherit">
        Back
      </Button>
    </Container>
  );
}