import { Grid } from '@mui/material';
import React from 'react';

const Doctor = ({doctor}) => {
    const {name, email, image} = doctor;
    return (
        <Grid item xs={12} sm={12} md={4}>
           <h3>{name}</h3>
           <img src={`data:image/png;base64,${image}`}/>
        </Grid>
    );
};

export default Doctor;