import { Grid } from '@mui/material';
import React from 'react';
import './TopBanner.css'
import TopBanner1 from '../../../images/top-banner/top-banner-1.webp'
import speaker from '../../../images/top-banner/speaker-logo.webp'
import smartphone from '../../../images/top-banner/smartphone-logo.webp'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const TopBanner = () => {
    return (
        <div>
            <div style={{background:'#CCD5E2',height:''}}>
            <div style={{width:'80%',margin:'auto',paddingTop:'7%',paddingBottom:'7%'}}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={6}>
                    <img src={TopBanner1} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <h1 style={{fontSize:'4vw'}}>Easy Your Life For Smart Device</h1>
                        <h3>ONLY</h3>
                        <h1>$24.05</h1>
                        <button className="top-button">All Products</button>
                    </Grid>
                </Grid> 
                </div>  
            </div>
            <div  style={{width:'85%',margin:'auto',paddingTop:'7%',paddingBottom:'7%'}}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid className="header-container" item xs={12} md={6}>
                        <img src={speaker} width="100%" alt="" />
                        <h1 className="header-product">
                            Speaker
                        </h1>
                        <h3 className="price">
                            From $69.00
                        </h3>
                        <button className="header-button">Buy Now <ArrowForwardIcon  sx={{fontSize:'18px',fontWeight:'900',paddingLeft:'5px'}}  /></button>
                    </Grid>
                    <Grid className="header-container" item xs={12} md={6}>
                      <img src={smartphone} width="100%" alt="" />
                      <h1 className="header-product">
                            SmartPhone
                        </h1>
                        <h3 className="price">
                            From $95.00
                        </h3>
                        <button className="header-button">Buy Now  <ArrowForwardIcon sx={{fontSize:'18px',fontWeight:'900',paddingLeft:'5px'}}  /></button>
                    </Grid>
                </Grid> 
            </div>
        </div>
    );
};

export default TopBanner;