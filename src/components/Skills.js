import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
} from '@mui/material';
import { motion } from 'framer-motion';



   

const skillCategories = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'VueJS', level: 60 },
      { name: 'ReactJS', level: 50 },
      { name: 'JQuery', level: 70 },
      { name: 'JavaScript', level: 70 },
      { name: 'HTML/CSS', level: 75 },
      { name: 'Bootstrap', level: 80 },
      { name: 'Tailwind CSS', level: 45 },

    ],
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'PHP', level: 75 },
      { name: 'MySQL', level: 75 },
      { name: 'Laravel', level: 80 },
      { name: 'CodeIgniter', level: 60 },
    ],
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git (GitHub & GitLab)', level: 45 },
      { name: 'Ubuntu', level: 50 },
      { name: 'AJAX', level: 60 },
      { name: 'REST APIs', level: 50 },
      { name: 'Docker', level: 50 },
      { name: 'Server & VPS Management', level: 75 },
      { name: 'Email Configuration & Integration', level: 45 },
      { name: 'Domain, DNS & SSL', level: 65 },
      { name: 'Cloud Storage', level: 65 },
      { name: 'Visul Studio Code', level: 85 },
      { name: 'PhpStorm', level: 70 },
      { name: 'TablePlus', level: 70 },
      { name: 'Slack', level: 70 },
      { name: 'Notion', level: 70 },
    ],
  },
];

const Skills = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'primary.main',
            fontWeight: 700,
          }}
        >
          Skills & Expertise
        </Typography>
        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{ mb: 3, color: 'primary.main' }}
                    >
                      {category.category}
                    </Typography>
                    {category.skills.map((skill, skillIndex) => (
                      <Box key={skillIndex} sx={{ mb: 2 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mb: 1,
                          }}
                        >
                          <Typography variant="body1">{skill.name}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: 'primary.light',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 4,
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills; 