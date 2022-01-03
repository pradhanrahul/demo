import React from "react";
import Button from "@mui/material/Button";
import { TextField } from "@material-ui/core";

function Errorpage() {
  return (
    <div className="error">
      <h1 className="yellow">404!</h1>
      <h2 className="white">Sorry, Page not found</h2>
      <h6 className="white1">
        which page you are looking for might have been removed had its named
        changed or is tempoarial unavailable
      </h6>
      <br />
      <div className="btn">
        <Button variant="contained" className="btn-padding">
          Go To Home
        </Button>
        <Button variant="contained">Contact Us</Button>
      </div>
      <br />
      <div className="search">
        <TextField
          id="outlined-basic"
          type="text"
          placeholder="Search..."
          className="anyclassname"
          variant="outlined"
          InputProps={{
            classes: {
              root: "anyclassname",
              input: "anyclassname",
            },
          }}
        />

        <Button variant="contained" className="view">
          Search
        </Button>
      </div>
    </div>
  );
}

export default Errorpage;
