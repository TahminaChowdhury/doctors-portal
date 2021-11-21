import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/doctors")
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <Container fixed>
        <Box>
        <Grid container spacing={2}>
        {
            doctors.map(doctor => <Doctor 
                key={doctor._id}
                doctor={doctor}></Doctor>)
        }
        </Grid>
        </Box>
        </Container>
    );
};

export default Doctors;