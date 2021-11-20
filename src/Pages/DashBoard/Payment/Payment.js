import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm'
import { Elements } from '@stripe/react-stripe-js';
import { Box } from '@mui/system';

const stripePromise = loadStripe("pk_test_51JwKPsJquxAPgLX0f3bFDMdIoQKVmXXIPfabmYwde13GfTrYWbYP8Yv0SN3l0glPuNP848ne85iYpAnVALC7UStF00ZAJqDfQa")

const Payment = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointment] = useState({});
    

    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
        .then(res => res.json())
        .then(data => setAppointment(data))
    },[appointmentId])
    return (
        <Box sx={{ textAlign: "center"}}>
            <h2>Please Pay {appointment.patientName} for {appointment.serviceName}</h2>
            
            {appointment?.price && <Elements stripe={stripePromise}>
            <CheckoutForm
            appointment={appointment}
            />
            </Elements>}
        </Box>
    );
};

export default Payment;

/*
1. install stripe and stripe-react
2. set publishable key
3. Elements
4. Checkout Form
-----
5. Create payment method
6. server: create payment Intent api
7. Load client secret
8. ConfirmCard payment
9. handle user error
*/