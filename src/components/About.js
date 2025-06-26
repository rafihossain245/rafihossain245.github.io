import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  Avatar,
  Chip,
  Divider,
  Paper,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import WebIcon from '@mui/icons-material/Web';
import TerminalIcon from '@mui/icons-material/Terminal';
import DataObjectIcon from '@mui/icons-material/DataObject';
import CloudIcon from '@mui/icons-material/Cloud';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import HttpIcon from '@mui/icons-material/Http';
import GitHubIcon from '@mui/icons-material/GitHub';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import DnsIcon from '@mui/icons-material/Dns';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PaymentIcon from '@mui/icons-material/Payment';
import MessageIcon from '@mui/icons-material/Message';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';

const About = () => {
  const experiences = [
    {
      title: 'Technical Support Engineer (PHP-Laravel)',
      company: 'Xgenious',
      period: 'June 2023 - Present',
      description:
        `Work area:
          Responsibilities include:
          •	Help a variety of 10+ Laravel script and 500+ active users across the world through ticket based systems.
          •	Guide customers to use specific products by answering their questions and providing useful information and instructions.
          •	Diagnose problems that customers have on their sites and offer solutions.
          •	Troubleshoot and investigate issues to create detailed bug reports on GitHub repositories.
          •	Script installation and Server (VPS, WHM) management and configurations(MySQL Root Password and Cron Job etc.) support provided.
          •	Write documentation and create tutorial videos for customer.
        
        Skills: Bug Reporting · Customer Support · Server Configuration`,
        
      icon: <WorkIcon />,
    },
    {
      title: 'Web Developer',
      company: 'RS Software',
      period: 'Sep 2021 - May 2023',
      description:
        `Work area:
          RS Software provides custom software solutions that added value to
          your business.Responsibilities include:
          •	Application development with Laravel, CodeIgniter, PHP, MySQL
          •	Design & frontend implementation with HTML, CSS, Bootstrap, JavaScript 
          •	Sometimes need to meeting with clients & understand their requirements
          •	Application deployment on Linux server
          
          Skills: PHP · Laravel · CodeIgniter · JavaScript · Cascading Style Sheets (CSS) · Bootstrap · REST APIs.`,
      icon: <WorkIcon />,
    },
    {
      title: 'PHP trainer',
      company: 'SR Institute of Design',
      period: 'Oct 2020 - Apr 2021',
      description: 'Worked as a trainer to train students and professionals in PHP.',
      icon: <WorkIcon />,
    },
    {
      title: 'Bachelor of Computer Science & Engineering',
      company: 'Manarat International University',
      description: 'Expected Graduation: April 2026',
      icon: <SchoolIcon />,
    },
    {
      title: 'Diploma In Engineering (Dip in Eng.)',
      company: 'National Science Research and Technology College (NSRTC), Rajshahi',
      description: 'Computer Technology',
      icon: <SchoolIcon />,
    },
  ];

  const skills = [
    { name: 'PHP', icon: <CodeIcon /> },
    { name: 'MySQL', icon: <StorageIcon /> },
    { name: 'Laravel', icon: <WebIcon /> },
    { name: 'CodeIgniter', icon: <WebIcon /> },
    { name: 'JavaScript', icon: <DataObjectIcon /> },
    { name: 'VueJS', icon: <LanguageIcon /> },
    { name: 'ReactJS', icon: <LanguageIcon /> },
    { name: 'Bootstrap', icon: <WebIcon /> },
    { name: 'Tailwind CSS', icon: <WebIcon /> },
    { name: 'Node.js', icon: <TerminalIcon /> },
    { name: 'AJAX', icon: <SettingsEthernetIcon /> },
    { name: 'JSON', icon: <DataObjectIcon /> },
    { name: 'REST APIs', icon: <HttpIcon /> },
    { name: 'Git (GitHub & GitLab)', icon: <GitHubIcon /> },
    { name: 'Docker', icon: <DeveloperBoardIcon /> },
    { name: 'Server & VPS Management', icon: <DnsIcon /> },
    { name: 'Email Configuration & Integration', icon: <EmailIcon /> },
    { name: 'Domain, DNS & SSL', icon: <LockIcon /> },
    { name: 'Cloud Storage', icon: <CloudIcon /> },
    { name: 'Payment Gateway', icon: <PaymentIcon /> },
    { name: 'Pusher', icon: <IntegrationInstructionsIcon /> },
    { name: 'Twilio', icon: <MessageIcon /> },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: 8,

      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: 'primary.main',
              fontWeight: 700,
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                bgcolor: 'primary.main',
                borderRadius: 2,
              },
            }}
          >
            About Me
          </Typography>

          <Grid container spacing={4}>
            {/* Profile Section */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  }}
                >
                  <Avatar
                    src="https://rafihossain245.github.io/images/profile_picture.png"
                    alt="Profile"
                    sx={{
                      width: 150,
                      height: 150,
                      mb: 3,
                      border: '4px solid',
                      borderColor: 'primary.main',
                    }}
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 1,
                      color: 'primary.main',
                      fontWeight: 600,
                    }}
                  >
                    Afiqur Rahman Rafi
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      mb: 3,
                      color: 'text.secondary',
                    }}
                  >
                    Software Developer
                  </Typography>
                  <Divider sx={{ width: '100%', mb: 3 }} />
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      textAlign: 'center',
                      color: 'text.primary',
                    }}
                  >
                    Passionate software engineer with expertise in full-stack development,
                    creating elegant solutions to complex problems.
                  </Typography>
                  <Box sx={{ mt: 'auto', width: '100%' }}>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 2,
                        color: 'primary.main',
                        fontWeight: 600,
                      }}
                    >
                      Skills
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                      }}
                    >
                      {skills.map((skill, index) => (
                        <Chip
                          key={index}
                          icon={skill.icon}
                          label={skill.name}
                          sx={{
                            bgcolor: 'rgba(0,0,0,0.05)',
                            color: 'primary.main',
                            border: '1px solid',
                            borderColor: 'primary.main',
                            '&:hover': {
                              bgcolor: 'primary.main',
                              color: 'white',
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Paper>
              </motion.div>

              {/* Thesis Card - Now directly below profile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    mt: 3,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      color: 'primary.main',
                      fontWeight: 600,
                      position: 'relative',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -8,
                        left: 0,
                        width: 40,
                        height: 3,
                        bgcolor: 'primary.main',
                        borderRadius: 1,
                      },
                    }}
                  >
                    Programming Course
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    sx={{
                      mb: 1,
                      color: 'primary.main',
                      fontWeight: 500,
                    }}
                  >
                    Web Application Development (PHP, Laravel)
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <CodeIcon sx={{ fontSize: 16, mr: 0.5 }} /> PHP · Laravel
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.primary',
                    }}
                  >
                    Developing E-Learning and E-commerce platform using Raw PHP and Laravel Framework.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>

            {/* Experience & Education Section */}
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {/* Experience Section */}
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    mb: 4,
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 3,
                      color: 'primary.main',
                      fontWeight: 600,
                      position: 'relative',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -8,
                        left: 0,
                        width: 40,
                        height: 3,
                        bgcolor: 'primary.main',
                        borderRadius: 1,
                      },
                    }}
                  >
                    Experience
                  </Typography>
                  <Timeline>
                    {experiences.filter(exp => exp.icon.type === WorkIcon).map((exp, index, filteredArray) => (
                      <TimelineItem key={index}>
                        <TimelineSeparator>
                          <TimelineDot
                            color="primary"
                            sx={{
                              boxShadow: '0 0 0 4px rgba(0,0,0,0.05)',
                            }}
                          >
                            {exp.icon}
                          </TimelineDot>
                          {index < filteredArray.length - 1 && (
                            <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                          )}
                        </TimelineSeparator>
                        <TimelineContent sx={{ ml:6 }}>
                          <Paper
                            elevation={1}
                            sx={{
                              p: 2,
                              borderRadius: 2,
                              bgcolor: 'rgba(0,0,0,0.02)',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'translateX(5px)',
                                bgcolor: 'rgba(0,0,0,0.04)',
                              },
                            }}
                          >
                            <Typography
                              variant="h6"
                              sx={{
                                color: 'primary.main',
                                fontWeight: 600,
                              }}
                            >
                              {exp.title}
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                color: 'text.secondary',
                                mb: 1,
                              }}
                            >
                              {exp.company} | {exp.period}
                            </Typography>
                            <Typography sx={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }} variant="body2" color="text.primary">
                              {exp.description}
                            </Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                  </Timeline>
                </Paper>

                {/* Education Section */}
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 3,
                      color: 'primary.main',
                      fontWeight: 600,
                      position: 'relative',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -8,
                        left: 0,
                        width: 40,
                        height: 3,
                        bgcolor: 'primary.main',
                        borderRadius: 1,
                      },
                    }}
                  >
                    Education
                  </Typography>
                  <Timeline>
                    {experiences.filter(exp => exp.icon.type === SchoolIcon).map((exp, index, filteredArray) => (
                      <TimelineItem key={index}>
                        <TimelineSeparator>
                          <TimelineDot
                            color="primary"
                            sx={{
                              boxShadow: '0 0 0 4px rgba(0,0,0,0.05)',
                            }}
                          >
                            {exp.icon}
                          </TimelineDot>
                          {index < filteredArray.length - 1 && (
                            <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                          )}
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper
                            elevation={1}
                            sx={{
                              p: 2,
                              borderRadius: 2,
                              bgcolor: 'rgba(0,0,0,0.02)',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'translateX(5px)',
                                bgcolor: 'rgba(0,0,0,0.04)',
                              },
                            }}
                          >
                            <Typography
                              variant="h6"
                              sx={{
                                color: 'primary.main',
                                fontWeight: 600,
                              }}
                            >
                              {exp.title}
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                color: 'text.secondary',
                                mb: 1,
                              }}
                            >
                              {exp.company} | {exp.period}
                            </Typography>
                            <Typography variant="body2" color="text.primary">
                              {exp.description}
                            </Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                  </Timeline>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 