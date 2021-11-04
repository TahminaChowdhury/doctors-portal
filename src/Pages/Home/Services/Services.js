import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import { Typography } from '@mui/material';


const services = [
    {
        name: "Fluoride Treatment",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas deserunt facilis cupiditate minima voluptatem non iste voluptates iure quae vitae omnis eligendi et, impedit possimus vel temporibus. Exercitationem, officia debitis",
        img: fluoride
    },
    {
        name: "Cavity Filling",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas deserunt facilis cupiditate minima voluptatem non iste voluptates iure quae vitae omnis eligendi et, impedit possimus vel temporibus. Exercitationem, officia debitis",
        img: cavity
    },
    {
        name: "Teeth Whitening",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas deserunt facilis cupiditate minima voluptatem non iste voluptates iure quae vitae omnis eligendi et, impedit possimus vel temporibus. Exercitationem, officia debitis",
        img: whitening
    },
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1, textAlign: 'center'}}>
        <Container fixed>
            <Typography variant="h6" component="div" sx={{ m: 2,   color: 'success.main' }}>OUR SERVICES</Typography>
            <Typography variant="h4" component="div" sx={{ m: 5, fontWeight: 'bold'}}>Services We Provide</Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
           {
               services.map(service => <Service 
                key={service.name}
                service={service}></Service>)
           }
        </Grid>
        </Container>
        </Box>
    );
};

export default Services;