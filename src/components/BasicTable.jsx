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
import { createTheme, ThemeProvider,styled } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#FF5F1F" // Replace with your desired shade of orange
    }
  }
});

const StyledPaper = styled(TableContainer)`
  background-color: orange; // Replace with your desired shade of orange
`;

export default function BasicTable() {
  function change() {
    console.log("first");
  }
  const [isLoggedIn15, setIsLoggedIn15] = useState(false);
  const navigate15 = useNavigate();

  const handleLogin15 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn15(true);

    // Navigate to the desired route
    navigate15("/AddUser"); // Example: Navigate to the Admin page after login
  };

  const [isLoggedIn40, setIsLoggedIn40] = useState(false);
  const navigate40 = useNavigate();

  const handleLogin40 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn40(true);

    // Navigate to the desired route
    navigate40("/"); // Example: Navigate to the Admin page after login
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
    <ThemeProvider theme={theme}>
    <Container style={{ backgroundColor: "orange" }}>
    <TableContainer component={Paper}>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">id</TableCell>
              <TableCell align="left"> Name</TableCell>
              <TableCell align="left">price</TableCell>
              <TableCell align="left">description</TableCell>
              <TableCell align="center">Actions</TableCell>
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
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    
                    <a href={`/UpdateUser/${user.id}`}>
                      <Button style={{ borderRadius: 0 }}>Update</Button>
                    </a>

                    {/* <a href={`/DeleteUser/${user.id}`}> */}
                    <Button
                      style={{
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                      }}
                      color="error"
                      onClick={() => deleteUser(user.id)}
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
      <Button onClick={handleLogin15} href="/AddUser" color="inherit">
        Add Pizza
      </Button>
      <Button onClick={handleLogin40} href="/" color="inherit">
        Cancel
      </Button>
    </Container>
    </ThemeProvider>
  );
}