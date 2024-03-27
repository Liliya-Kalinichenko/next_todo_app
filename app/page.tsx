import { Typography } from "@mui/material";
import React from "react";
import Main from "./components/MainContainer";
import Hero from "./components/Hero/Hero";
import App from "./components/App";

 const Home = () => {
  return (
    <Hero>
      <div style={{height: "100vh", width: "100%", background: "transparent"}}></div>
      <div style={{height: "100vh", width: "100%", overflowY: 'auto'}}>
        <Main>
          <Typography mt={5} variant="h2">
            What needs to be done?
          </Typography>
          <App />
        </Main>
      </div>
    </Hero>
  )
}

export default Home;