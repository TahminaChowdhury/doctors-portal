import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const MakeAdmin = () => {

    const [email, setEmail] = useState('');

    const [success, setSuccess] = useState(false);

    const {token} = useAuth();


    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleOnSubmit = e => {
       
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: "PUT",
            headers: {
                "authorization": `Bearer ${token}`,
                "content-type": "application/json"},
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount !== 0) {
                setSuccess(true);
            }
        })

        e.preventDeafult();
    }
    return (
        <div>
             {
                    success && <Alert severity="success">Added Admin successfully</Alert>
                }
            <h1>Make an Admin</h1>
            <form onSubmit={handleOnSubmit}>
            <TextField 
            sx={{width: '50%'}}
            type="email"
            onBlur={handleOnBlur}
            id="standard-basic" 
            label="Email" 
            variant="standard" />
            <br/>
            <br/>
            <Button variant="outlined" type="submit">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;