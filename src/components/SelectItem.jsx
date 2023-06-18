import { Box, Button, Container, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SelectItem = () => {
    const [isLoggedIn13, setIsLoggedIn13] = useState(false);
  const navigate13 = useNavigate();

  const handleLogin13 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn13(true);

    // Navigate to the desired route
    navigate13("/DisplayPage"); // Example: Navigate to the Admin page after login
  };

  const [isLoggedIn35, setIsLoggedIn35] = useState(false);
  const navigate35 = useNavigate();

  const handleLogin35 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn35(true);

    // Navigate to the desired route
    navigate35("/Navbar"); // Example: Navigate to the Admin page after login
  };

  let navigate = useNavigate();

  const [userData, setUserData] = useState({
    id:"",
    name: ""
  });

  const { id,name } = userData;

  const handleData = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitData = async (e) => {
    e.preventDefault();
    console.log(userData);
    await axios.post("http://localhost:8081/additem", userData);
    setUserData({ id:"",name: "" });
    navigate("/DisplayPage");
  };

  


  return (
    <Container>
      <Box>
        <h1>Please provide pizza Id and  pizza name</h1>
        <form onSubmit={submitData}>
          <Stack spacing={2} marginTop={5} maxWidth={"40vh"}>
            <TextField
              variant="outlined"
              label="id"
              name="id"
              value={id}
              onChange={handleData}
            />
            <TextField
              variant="outlined"
              label="name"
              name="name"
              value={name}
              onChange={handleData}
            />
            
            <Stack direction={"row"} spacing={2}>
              <Button type="submit" variant="contained"  onClick={handleLogin13}> 
                Add To Cart
              </Button>
              <Button  color="error" variant="contained" onClick={handleLogin35}>
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default SelectItem;
