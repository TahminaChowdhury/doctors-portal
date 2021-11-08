import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import login from '../../images/login.png'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user,loginUser,isLoading, error, loginWithGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLogin = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history);
        
    }
    const handleGoogleLogIn = () => {
        loginWithGoogle(location, history)
    }
    return (
        <Container sx={{my: 5, py: 5}}>
             <Grid sx={{mt: 8}} container spacing={2}>
                <Grid item xs={12} md={6} sx={{textAlign: 'center'}}>
                <Typography variant="body1" gutterBottom>
                    Login
                </Typography>
                {
               isLoading && <CircularProgress />
                }
                <form onSubmit={handleLogin}>
                <TextField
                sx={{ width: "70%", mb: 1}}
                id="standard-password-input"
                label="Email"
                name="email"
                onChange={handleOnChange}
                variant="standard"
                />
                <br />
                <TextField
                sx={{ width: "70%", mt: 1}}
                id="standard-password-input"
                label="Password"
                type="password"
                name="password"
                onChange={handleOnChange}
                autoComplete="current-password"
                variant="standard"
                />
                
                <Button onClick={loginUser} sx={{ width: "70%", mt: 5}} variant="contained" type="submit">Login</Button>
                <br />
                <NavLink to="/register" style={{ textDecoration: "none"}}>Don't have an account ? <Button variant="text" sx={{my: 3}}>Sign up</Button></NavLink>
                <br />
                
                {
                    user?.email && <Alert severity="success">User created successfully!</Alert>
                }
                {
                    error && <Alert severity="error">{error}</Alert>
                }
                <br/>
                <Button variant="outlined" onClick={handleGoogleLogIn}>Login With Google</Button>
                </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: "100%"}} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;