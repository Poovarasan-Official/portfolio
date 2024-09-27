import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const skills = [
    { image: 'javascript.svg', title: 'JavaScript' },
    { image: 'html5.svg', title: 'HTML5' },
    { image: 'css3.svg', title: 'CSS3' },
    { image: 'materialui.svg', title: 'MUI' },
    { image: 'bootstrap.svg', title: 'Bootstrap' },
    { image: 'reactjs.svg', title: 'React' },
    { image: 'nodejs.svg', title: 'NodeJs' },
    { image: 'mongodb.svg', title: 'MongoDB' },
    { image: 'mysql.svg', title: 'MySQL' },
    { image: 'vscode.svg', title: 'VsCode' },
    { image: 'photoshop.svg', title: 'Photoshop' },
    { image: 'illustrator.svg', title: 'Illustrator' },
];

export default function Skills() {
    return (
        <Container sx={{ p: 4 }}>
            <Typography variant="h3" gutterBottom align="start" sx={{ display: 'flex', alignItems: 'center' }}>
                <EmojiEventsIcon sx={{ mr: 2, fontSize: 30 }} />Skills & Tools
            </Typography>
            <Grid container spacing={3} justifyContent="center" alignItems="center">
                {skills.map((skill, index) => (
                    <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                        <Card 
                            sx={{ 
                                maxWidth: 180, 
                                maxHeight: 180, 
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'center',
                                p: 2,
                                boxShadow: 3,
                                transition: 'transform 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)'
                                }
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={skill.image}
                                title={skill.title}
                                sx={{ width: '80px', height: '80px', objectFit: 'contain', mt: 2 }}
                            />
                            <CardContent>
                                <Typography variant="h6" align="center">
                                    {skill.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
