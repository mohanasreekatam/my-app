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

export default function DisplayPage() {
  function change() {
    console.log("first");
  }
 



  const [isLoggedIn36, setIsLoggedIn36] = useState(false);
  const navigate36 = useNavigate();

  const handleLogin36 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn36(true);

    // Navigate to the desired route
    navigate36('/Navbar'); // Example: Navigate to the Admin page after login
  };

  const [isLoggedIn50, setIsLoggedIn50] = useState(false);
  const navigate50 = useNavigate();

  const handleLogin50 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn50(true);

    // Navigate to the desired route
    navigate50('/PizzaTable'); // Example: Navigate to the Admin page after login
  };
  
  const [isLoggedIn37, setIsLoggedIn37] = useState(false);
  const navigate37 = useNavigate();

  const handleLogin37 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn37(true);

    // Navigate to the desired route
    navigate37('/Payment'); // Example: Navigate to the Admin page after login
  };
  const [users, setUsers] = React.useState([]);

  const { id } = useParams();

  React.useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const users = await axios.get("http://localhost:8081/getitem");
    setUsers(users.data);
    console.log(users.data);
  };

  const deleteitem = async (id) => {
    await axios.delete(`http://localhost:8081/deleteitem/${id}`);
    loadUsers();
  };
  function change() {
    console.log("first");
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((admin, index) => (
              <TableRow key={index}>
                <TableCell>{admin.id}</TableCell>
                <TableCell>{admin.name}</TableCell>
                <TableCell align="center">
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    
                    <Button
                      style={{
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                      }}
                      color="error"
                      onClick={() => deleteitem(admin.id)}
                    >
                      Delete
                    </Button>
                    {/* </a> */}
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    
    
    <Button  color="error" variant="contained" onClick={handleLogin36}>
    Cancel
  </Button>
  <Button variant="contained" onClick={handleLogin37}>
    Payment
  </Button>
  <Button variant="contained" onClick={handleLogin50}>
    Add Another Pizza
  </Button>

  </Container>  
  );
}