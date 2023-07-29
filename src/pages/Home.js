import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom';
import bg1 from '../images/bg1.jpg'
import '../styles/HomeStyles.css';
const Home = () => {
  return (
    <Layout>
        <div className='home' style={{ backgroundImage:`url(${bg1})`,backgroundSize: 'cover', color:'white'}}>
          <div className='headerContainer'>
            <h1>Balaji Foods</h1>
            <p>Best Food in India</p>
            <Link to="/menu">
            <button>ORDER NOW</button>
            </Link>
          </div>
        </div>
    </Layout>
  );
};

export default Home;