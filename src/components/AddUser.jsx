import { Box, Button, Container, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const [isLoggedIn13, setIsLoggedIn13] = useState(false);
  const navigate13 = useNavigate();

  const handleLogin13 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn13(true);

    // Navigate to the desired route
    navigate13("/BasicTable"); // Example: Navigate to the Admin page after login
  };

  let navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    price: "",
    description: "",
  });

  const { name, price, description } = userData;

  const handleData = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitData = async (e) => {
    e.preventDefault();
    console.log(userData);
    await axios.post("http://localhost:8081/adduser", userData);
    setUserData({ name: "", price: "", description: "" });
    navigate("/BasicTable");
  };

  


  return (
    <Container>
      <h1>Add Your Own Pizza</h1>
      <Box>
        <form onSubmit={submitData}>
          <Stack spacing={2} marginTop={5} maxWidth={"40vh"}>
            <TextField
              variant="outlined"
              label="name"
              name="name"
              value={name}
              onChange={handleData}
            />
            <TextField
              variant="outlined"
              label="price"
              name="price"
              value={price}
              onChange={handleData}
            />
            <TextField
              label="description"
              name="description"
              value={description}
              variant="outlined"
              onChange={handleData}
            />
            <Stack direction={"row"} spacing={2}>
              <Button type="submit" variant="contained"  onClick={handleLogin13}> 
                Add Pizza
              </Button>
              <Button href="/" color="error" variant="contained">
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default AddUser;
