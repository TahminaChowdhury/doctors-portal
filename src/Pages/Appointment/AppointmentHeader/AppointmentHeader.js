import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import chair from '../../../images/chair.png'
import Calender from '../../Shared/Calender/Calender';
const AppointmentHeader = ({date, setDate}) => {
    return (
      <Container sx={{my: 5, py: 5}}>
                <Box sx={{ width: '100%' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Calender date={date} setDate={setDate}></Calender>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{width: "90%"}} src={chair} alt="" />
                    </Grid>
                </Grid>
                </Box>
      </Container>
    );
};

export default AppointmentHeader;