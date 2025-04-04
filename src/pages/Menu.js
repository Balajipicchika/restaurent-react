import React from 'react'
import Layout from '../components/Layout/Layout'
import {MenuList} from '../data/data'
import {MenuList2} from '../data/data2'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const Menu = () => {
  return (
    <Layout>
      <h1 style={{marginLeft: '30px'}}>Tiffins:</h1>
        <Box sx={{ display:'flex', flexWrap:'wrap',justifyContent:'center',
          "@media (max-width:600px)":{
            display:'flex',
            flexWrap:'wrap',
          }
        }}>
          {
            MenuList.map(menu =>(
              <Card sx={{ maxWidth:'170px',m:3,
                "@media (max-width:600px)":{
                  maxWidth: '130px'
                }}}>
                <CardActionArea>
                  <CardMedia sx={{ minHeight:'170px', "@media (max-width:600px)":{
                    minHeight:'130px',
                  }}} component={'img'} src={menu.image} alt={menu.name} />
                  <CardContent>
                    <Typography variant='h6' textAlign={'center'} gutterBottom component={'div'}>
                      {menu.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))
          }
        </Box>

        <h1 style={{marginLeft: '30px'}}>Meals:</h1>
        <Box sx={{ display:'flex', flexWrap:'wrap',justifyContent:'center',
          "@media (max-width:600px)":{
            display:'flex',
            flexWrap:'wrap',
          }
        }}>
          {
            MenuList2.map(menu =>(
              <Card sx={{ maxWidth:'170px',m:3,
                "@media (max-width:600px)":{
                  maxWidth: '130px',
                }}}>
                <CardActionArea>
                  <CardMedia sx={{ minHeight:'170px', "@media (max-width:600px)":{
                    minHeight:'130px',
                  }}} component={'img'} src={menu.image} alt={menu.name} />
                  <CardContent>
                    <Typography variant='h6' textAlign={'center'} gutterBottom component={'div'}>
                      {menu.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))
          }
        </Box>
    </Layout>
  );
};

export default Menu;