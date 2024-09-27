import * as React from 'react';
import { Grid, CardMedia, Typography, useMediaQuery, useTheme, Button, Box, Container, Link } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import DownloadIcon from '@mui/icons-material/Download';

export default function Header() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen is small (sm or less)

    return (
        <Container sx={{ mb: 4, mt: 5 }}>
            <Grid 
                container 
                spacing={2} 
                direction={isSmallScreen ? 'column' : 'row'} // Stack items vertically on small screens
                alignItems="center" // Center items vertically
            >
                {/* Image Section */}
                <Grid 
                    item 
                    xs={12} 
                    md={6} 
                    sx={{ 
                        display: 'flex', 
                        justifyContent: isSmallScreen ? 'center' : 'flex-start' 
                    }}
                >
                    <CardMedia
                        component="img"
                        image="react.svg"
                        style={{ 
                            width: isSmallScreen ? '100%' : '80%', // Adjust width for mobile
                            height: isSmallScreen ? '300px' : '500px', // Adjust height for mobile
                            objectFit: 'contain' 
                        }}
                    />
                </Grid>

                {/* Text Section */}
                <Grid 
                    item 
                    xs={12} 
                    md={6} 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        height: isSmallScreen ? 'auto' : '500px' // Adjust height for mobile
                    }}
                >
                    <Typography variant="h4" gutterBottom color="success.main" align="center">
                        Hello,👋 I'm Poovarasan R.
                        <VerifiedIcon sx={{ ml: 1, color: 'green' }} />
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom align="center">
                        I am a full-stack developer from Tamil Nadu, India.
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Link target="_blank"href="https://docs.google.com/document/d/17cgSWmjV0MqsCdIpya_zi5cqjlJuv4hmQioN5AowPkE/edit?usp=sharing">
                        
                        <Button 
                            variant="outlined" 
                            startIcon={<DownloadIcon />} 
                            sx={{ 
                                width: isSmallScreen ? '100%' : '250px', // Adjust button width for mobile
                                borderRadius: 8 
                            }}
                        >
                            Download CV
                        </Button>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}