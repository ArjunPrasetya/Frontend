"use client"
import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h1>Login</h1>
      <h5>Don't have an account?</h5>
      <FormControl>
        <TextField id="email-username" label="Email/Username" type="text"  />
        <TextField id="password" label="Password" type="password" />
        <Button variant="contained" href="/Home">Login</Button>
      </FormControl>
    </>
  );
}
{/*import { Box } from "@mui/material"
import TextField from "@mui/material"

export default function Login() {
  return (
    <>
      <h1>Login</h1>
    </>

  )
}*/}