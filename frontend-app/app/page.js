import { Button, Stack } from "@mui/material" 

export default function Landing() {
  return (
    <>
    <h1>Welcome To Our Website</h1>
    <Stack spacing={2} direction="row">
      <Button variant="contained" href="/LogReg/Login">Login</Button>
      <Button variant="contained" href="/LogReg/Register">Register</Button>
    </Stack>
    </>
  )
}
