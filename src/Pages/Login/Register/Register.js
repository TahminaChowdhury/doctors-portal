import { Button, CircularProgress, Container, Grid, TextField, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'
const Register = () => {
    const [signupData, setSignupData] = useState({});

    const history = useHistory();
    

    const {user,registerUser, isLoading, error} = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...signupData};
        newLoginData[field] = value;
        setSignupData(newLoginData);
    }
    const handleSignIn = e => {
        e.preventDefault();
        if (signupData.password !== signupData.password2) {
            alert("Password Doesn't match");
            return;
        }
        registerUser(signupData.email, signupData.password, signupData.name,history)
    }
    return (
        <Container sx={{my: 5, py: 5}}>
        <Grid sx={{mt: 8}} container spacing={2}>
           <Grid item xs={12} md={6} sx={{textAlign: 'center'}}>
           <Typography variant="body1" gutterBottom>
               Sign up
           </Typography>
           {!isLoading && <form onSubmit={handleSignIn}>
           <TextField
           sx={{ width: "70%", mb: 1}}
           id="standard-password-input"
           label="Name"
           name="name"
           onBlur={handleOnBlur}
           variant="standard"
           />
           <br/>
           <TextField
           sx={{ width: "70%", mb: 1}}
           id="standard-password-input"
           type="email"
           label="Email"
           name="email"
           onBlur={handleOnBlur}
           variant="standard"
           />
           <br />
           <TextField
           sx={{ width: "70%", mt: 1}}
           id="standard-password-input"
           label="Password"
           type="password"
           name="password"
           onBlur={handleOnBlur}
           autoComplete="current-password"
           variant="standard"
           />
           <TextField
           sx={{ width: "70%", mt: 1}}
           id="standard-password-input"
           label="Re-Enter Your Password"
           type="password"
           name="password2"
           onBlur={handleOnBlur}
           autoComplete="current-password"
           variant="standard"
           />
           
           <Button onClick={handleSignIn} sx={{ width: "70%", mt: 5}} variant="contained">Sign up</Button>
           <br />
           <NavLink to="/login" style={{ textDecoration: "none"}}>Already Signed up ? <Button variant="text" sx={{my: 3}}>Login</Button></NavLink>
           <br />
           </form>}
           {
               isLoading && <CircularProgress />
           }
           {
               user?.email && <Alert severity="success">User created successfully!</Alert>
           }
           {
               error && <Alert severity="error">{error}</Alert>
           }
           </Grid>
           <Grid item xs={12} md={6}>
               <img style={{width: "100%"}} src={login} alt="" />
           </Grid>
       </Grid>
   </Container>
    );
};

export default Register;