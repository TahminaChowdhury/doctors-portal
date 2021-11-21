import { TextField, Input, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState("");

    

    const handleOnSubmit = e => {
        e.preventDefault();
        if (!image) {
            alert("Please Add An Image")
            return;
        }
        const formData = new FormData();
        formData.append('name', name)
        formData.append('email', email)
        formData.append('image', image)

        fetch('http://localhost:5000/doctors', {
        method: 'POST',
        body: formData
        })
        .then(response => response.json())
        .then(data => {
        if (data.insertedId) {
            setSuccess("Doctor Addeded Successfully")
        }
        })
        .catch(error => {
        console.error('Error:', error);
        });
    }
    return (
        <div>
            <h2>Add a Doctor</h2>
            <form onSubmit={handleOnSubmit}>
            <TextField 
            sx={{width: "50%"}}
            required
            label="Name" 
            onChange={(e) => setName(e.target.value)}
            variant="standard" />
            <br/>
            <br/>
            <TextField 
            sx={{width: "50%"}}
            required
            label="Email"
            onChange={(e) => setEmail(e.target.value)} 
            variant="standard" />
            <br/>
            <br/>
            <Input accept="image/*" 
            onChange={ e => setImage(e.target.files[0])}
             type="file" />
            <br/>
            <br/>
            <Button variant="contained" type="submit">
                Add Doctor
            </Button>
            </form>
            {
                success && <p>{success}</p>
            }
        </div>
    );
};

export default AddDoctor;