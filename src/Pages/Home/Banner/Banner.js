import React from 'react';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';


const bannerbackground = {
    background: `url(${bg})`,
}
const verticalCenter = {
    display: "flex",
    alignItems: "center",
    height: 400
}
const Banner = () => {
    return (
        <Container  fixed>
            <Box style={bannerbackground} sx={{ flexGrow: 1 }}>
            <Grid style={verticalCenter} container spacing={2}>
                <Grid item xs={12} md={5} sx={{my: 5}}>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', my: 2 }}>
                        Your New Smile <br /> Starts Here
                    </Typography>
                    <Typography variant="p" component="div" sx={{ my: 2, color: "gray"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita optio cupiditate totam rerum quaerat officia ea fugit ad exercitationem quisquam magnam illum iste fugiat repudiandae delectus, ipsum natus necessitatibus! Quia.
                    </Typography>
                    <Button variant="contained">Learn More</Button>
                </Grid>
                <Grid item xs={12} md={7} style={{ paddingLeft: "auto"}}>
                <img style={{ width: 500}} src={chair} alt="" />
                </Grid>

            </Grid>
    </Box>
        </Container>
    );
};

export default Banner;