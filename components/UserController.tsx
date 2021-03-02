import React from "react";
import { TextField, Button } from "@material-ui/core";
import Link from "next/link";

interface Props {}

const UserController = () => {
  return (
    <>
      <h4>Log in</h4>

      <form>
        <TextField
          id="username"
          label="Username"
          autoComplete="username"
          fullWidth
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          fullWidth
        />

        <div className="w3-padding-16">
          <Button variant="contained">
            <span>Submit</span>
          </Button>
        </div>
      </form>

      <span>
        New user?{" "}
        <Link href="/register">
          <a>Click here to register.</a>
        </Link>
      </span>
    </>
  );
};

export default UserController;
