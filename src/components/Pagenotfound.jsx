import React from "react";
import { TextField } from "@material-ui/core";


function Pagenotfound() {
  return (
    <div className="main">
      <nav className="nav1">
        <div className="logo">HIPB2b</div>
        <ul>

          <li>
            <a href="#"></a>Company
          </li>
          <li>
            <a href="#"></a>Solution
          </li>
          <li>
            <a href="#"></a>Resources
          </li>
          <li>
            <a href="#"></a>contact
          </li>
          
        </ul>
      </nav>
      <h1 className="head">404</h1><br />
      <h2 className="head2">Page not found</h2><br />
      <h6 className="head3">
        which page you are looking for might have been removed had its named
        changed or is tempoarial unavailable</h6>
        <div className="search1">
        {/* <TextField type="text" placeholder="Search..." className="search11"  */}
        <TextField id="outlined-basic"type="text" placeholder="Search..." className="search12"  variant="outlined"
        InputProps={{
          classes:{
            root:"classname",
            input:"classname",
            notchedOutline:"hide-outline",
          },
        }}/>
</div>

    </div>
  );
}

export default Pagenotfound;
