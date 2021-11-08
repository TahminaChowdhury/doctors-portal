import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../../BookingModal/BookingModal';

const Booking = ({booking, date, setBookingSuccess}) => {
    const {id, name, time, space } = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true); 
    // buuton e use korte hbe handle booking close
    const handleBookingClose = () => setOpenBooking(false);
    return (
          <>
            <Grid item xs={12} sm={6} md={4} sx={{my: 5}}>
               <Paper elevation={3} sx={{py: 5}}>
               <Typography sx={{ color: 'info.main', fontWeight: 'bold' }} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
               <Typography variant="h6" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    {space} SPACES AVAILABLE
                </Typography>
                <Button onClick={handleBookingOpen} variant="contained" sx={{mt: 2}}>Book APPOINTMENT</Button>
               </Paper>
            </Grid>
            <BookingModal 
            setBookingSuccess={setBookingSuccess}
            date={date}
            booking={booking}
            openBooking={openBooking}
            handleBookingClose={handleBookingClose}
            ></BookingModal>
          </>
    );
};

export default Booking;