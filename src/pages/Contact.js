import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Table, TableCell, TableRow, Paper, TableContainer, TableHead, Typography, TableBody } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

function Contact() {
  return (
    <Layout>
        <Box sx={{ my: 5, ml: 10,
        "& h4": {
          fontWeight:'bold',
          mb: 2,
        },
        "& p": {
          textAlign:"justify",
        },
        "@media (max-width:600px)": {
          width:'300px',
          ml: 5.5,
        },}}>
          <Typography variant='h4'>
            Conatct My Restaurent
          </Typography>
          <p>
          Balaji Foods  delivers your food without delivery charges in 5km range.
          if morethan five kilometers, then the delivery charges are ₹5 per kilometer.
          </p>
        </Box>
        <Box sx={{ m:3, width:'600px', ml:10,
        "@media (max-width:600px)":{
          width:'300px',
          ml: 5.5,
        },  }}>
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor:'black', color:'white'}} align='center'>
                  Conatct Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color:"red", pt:1}}/> 1800-00-9922 (tollfree)
                </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color:"skyblue", pt:1}}/> myrestaurent@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color:"green", pt:1}}/> 9492553841
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;