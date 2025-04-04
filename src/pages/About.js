import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
        <Box sx={{
          // my: 2,
          p: 2,
          textAlign: "center",
          margin: '20px',
          border: "0.5px solid gray",
          borderRadius: '10px',
          boxShadow: '2px 2px 3px gray',
          "& h4": {
            fontWeight:'bold',
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign:'justify',
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4": {
              fontSize: "1.5rem",
            }
          }
        }}>
          <Typography variant='h4' sx={{textAlign:"center"}}>
            Welcome to My restaurent
          </Typography>
          <p>
          My Restaurant is a most popular name in the present state. Many people do not have their
           meal in their home, they always take meal and food from Balaji Foods restaurant.  Restaurant is a public 
           place, which opens to all for selling food and beverage to any person and peoples. many of peoples are 
           visit Restaurant and take food from Restaurant. We have different state and country food items. Many people do not have their meal 
           in their home, they always take meal and food from restaurant. Many tourists also visit Restaurent and they enjoy eating food.
           My restaurent have a best rating in country.
          </p>
        </Box>
    </Layout>
  );
};

export default About;