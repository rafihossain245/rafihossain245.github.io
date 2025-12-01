import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Apollo international',
    description: 'Apollo international is provided an education and migration services. This application has main features is pages and sections, how many sections will be on a page can be determined like WordPress also, there are many more features in this application.',
    image: 'https://rafihossain245.github.io/images/visa_management.jpg',
    technologies: ['Laravel','MySQL','HTML5','CSS3','Bootstrap5','JQuery','Ajax'],
    link: 'https://apollointl.com.au/',
  },
  {
    title: '14th November Studio',
    description: '14th November Studio is a cinematography and photography service management system. Admin can manage their package, event, announcement in admin dashboard. This application also has mobile version.',
    image: 'https://rafihossain245.github.io/images/studio_management.jpg',
    technologies: ['Laravel','MySQL','HTML5','CSS3','Bootstrap5','JQuery','Ajax'],
    link: 'https://www.14thnovemberstudio.ca/',
  },
  {
    title: 'Q-Study',
    description: 'Q-Study is quick e-learning online platform for managing data associated with its tutoring classes in the most efficient and transparent manner. There is multiple rolling system. Such as Admin, tutor, student etc.',
    image: 'https://rafihossain245.github.io/images/qstudy_img1.jpg',
    technologies: ['CodeIgniter','MySQL','HTML5','CSS3','Bootstrap','JQuery','Ajax'],
    link: 'https://q-study.com/',
  },
  {
    title: 'Social Referral Finder(SRF)',
    description: 'This software can manage multiple Facebook group information. Admin can curl the group information without active all day long. Multiple rolling system and admin can generate report, import csv data and show overview group information in graph chart with filtering feature.',
    image: 'https://rafihossain245.github.io/images/srf_img.jpg',
    technologies: ['CodeIgniter','MySQL','HTML5','CSS3','Bootstrap','JQuery','Ajax'],
    link: 'https://www.socialreferralfinder.com/',
  },
  {
    title: 'School Management System',
    description: 'This software can manage multiple school, trainer and student. There are many features in this software, such as student attendant, assignment, project and certificate system etc. Also zoom API integration for zoom class.',
    image: 'https://rafihossain245.github.io/images/school_management_system.jpg',
    technologies: ['Laravel','MySQL','HTML5','CSS3','Bootstrap5','JQuery','Ajax'],
    link: 'https://github.com/rafihossain245/school_management',
  },
  {
    title: 'Property Management System',
    description: 'This property management software can control single and multiple property. Also controls floors, unit, tenant, visitor report and mailing system to send notification all users.',
    image: 'https://rafihossain245.github.io/images/property management.jpg',
    technologies: ['CodeIgniter','MySQL','HTML5','CSS3','Bootstrap','JQuery','Ajax'],
    link: 'https://github.com/rafihossain245/property_manage',
  },
];

const Projects = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 6,
              color: 'primary.main',
              fontWeight: 700,
              textAlign: 'center',
            }}
          >
            My Projects
          </Typography>
          <Grid container spacing={3} sx={{ 
            justifyContent: 'center',
            alignItems: 'stretch',
          }}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '600px',
                      display: 'flex',
                      flexDirection: 'column',
                      bgcolor: 'background.paper',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.02)',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                      },
                      position: 'relative',
                      overflow: 'auto',
                      borderRadius: '16px',
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="120"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        borderBottom: '1px solid rgba(0,0,0,0.1)',
                        objectFit: 'cover',
                        width: '100%',
                        height: '250px',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                    <CardContent sx={{ 
                      flexGrow: 1, 
                      display: 'flex', 
                      flexDirection: 'column',
                      p: { xs: 2, sm: 3 },
                      background: 'linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,1))',
                      height: '480px',
                      justifyContent: 'space-between',
                      overflow: 'auto',
                    }}>
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            mb: 2,
                            color: 'primary.main',
                            fontWeight: 600,
                            fontSize: { xs: '1.1rem', md: '1.25rem' },
                            lineHeight: 1.2,
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            mb: 2,
                            color: 'primary.main',
                            fontSize: { xs: '0.875rem', md: '1rem' },
                          }}
                        >
                          {project.description}
                        </Typography>
                        <Box
                          sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 1,
                            mb: 2,
                          }}
                        >
                          {project.technologies.map((tech, techIndex) => (
                            <Typography
                              key={techIndex}
                              variant="body2"
                              sx={{
                                color: 'primary.main',
                                bgcolor: 'rgba(0,0,0,0.05)',
                                px: 2,
                                py: 0.5,
                                borderRadius: 1,
                                border: '1px solid rgba(0,0,0,0.1)',
                              }}
                            >
                              {tech}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                      <Button
                        variant="outlined"
                        href={project.link}
                        target="_blank"
                        sx={{
                          color: 'primary.main',
                          borderColor: 'primary.main',
                          '&:hover': {
                            borderColor: 'primary.light',
                            bgcolor: 'rgba(0,0,0,0.05)',
                          },
                          alignSelf: 'flex-start',
                        }}
                      >
                        View Project
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 