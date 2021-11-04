import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Container, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175,

}

const AppointmentBanner = () => {
   
    return (
        <Container fixed>
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }} >

      <Grid container spacing={2}>

        <Grid item xs={12} md={6}>
            <img
            style={{width: 400, marginTop: -110}}
            src={doctor} alt="" />
        </Grid>

        <Grid item xs={12} md={6} sx={{ my: 2 }}>
           <Typography variant="h6" sx={{ color: 'primary.main' }}>
                Appointment
           </Typography>
           <Typography variant="h4" style={{color: "white"}}>
                Make an appointment <br /> Today
           </Typography>
           <Typography variant="p" component="div" style={{color: 'white'}} sx={{ py: 2}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, placeat provident eaque tempore ea delectus harum corporis deleniti inventore saepe non soluta unde asperiores sequi quisquam aliquam quae dignissimos explicabo?
           </Typography>
           <Button variant="contained">Learn More</Button>
        </Grid>
      </Grid>
    </Box>
    </Container>
    );
};

export default AppointmentBanner;