import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

export default function Copyrights() {
    return (
        <Box
            component="footer"
            sx={{
                py: 10,
                px: 2, // Adjusted for better padding on smaller screens
                mt: 'auto',
                backgroundColor: "#0866ff66",
            }}
        >
            <Container maxWidth="sm">
                <Grid container spacing={1} justifyContent="center" sx={{ mb: 2 }}>
                    <Grid item xs={4} sm={4} textAlign="center">
                        <Link href="https://www.linkedin.com/in/poovarasan-r-3732a6169/" target="_blank" color="inherit" aria-label="LinkedIn">
                            <img src="linkedin.svg" alt="LinkedIn" style={{ width: 40, height: 40 }} />
                        </Link>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} textAlign="center">
                        <Link href="https://github.com/Poovarasan-Official" target="_blank" color="inherit" aria-label="GitHub">
                            <img src="github.svg" alt="GitHub" style={{ width: 40, height: 40 }} />
                        </Link>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} textAlign="center">
                        <Link href="mailto:poovarasan.offical@gmail.com" target="_blank" color="inherit" aria-label="Gmail">
                            <img src="gmail.svg" alt="Gmail" style={{ width: 40, height: 40 }} />
                        </Link>
                    </Grid>
                </Grid>
                <Typography variant="subtitle1" align="center">
                    {'© '}
                    {new Date().getFullYear()}
                    {' All rights reserved | Poovarasan'}
                </Typography>
            </Container>
        </Box>
    );
}
