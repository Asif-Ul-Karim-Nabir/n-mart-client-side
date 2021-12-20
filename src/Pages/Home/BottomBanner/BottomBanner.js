import { Grid } from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import watch from '../../../images/bottom-banner/watch-1.webp';
import speaker from '../../../images/bottom-banner/speaker-2.webp';
import car from '../../../images/icon-img/car-1.png';
import card from '../../../images/icon-img/card-2.png';
import easyReturn from '../../../images/icon-img/easy-return-3.png';
import './BottomBanner.css'

const BottomBanner = () => {
    return (
        <div>
             <div  style={{width:'85%',margin:'auto',paddingTop:'',paddingBottom:'7%'}}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid className="bottom-banner-container" item xs={12} md={6}>
                        <img src={watch} width="100%" alt="" />
                        <h1 className="bottom-product">
                          Smart Watch For <br /> Your Hand
                        </h1>
                        <h3 className="prices">
                            From $69.00
                        </h3>
                        <button className="bottom-button">Buy Now <ArrowForwardIcon  sx={{fontSize:'18px',fontWeight:'900',paddingLeft:'5px'}}  /></button>
                    </Grid>
                    <Grid className="bottom-banner-container" item xs={12} md={6}>
                      <img src={speaker} width="100%" alt="" />
                      <h1 className="bottom-product">
                         Smart Speaker For <br /> Your Home
                        </h1>
                        <h3 className="prices">
                            From $95.00
                        </h3>
                        <button className="bottom-button">Buy Now  <ArrowForwardIcon sx={{fontSize:'18px',fontWeight:'900',paddingLeft:'5px'}}  /></button>
                    </Grid>
                </Grid> 
            </div>
            <div style={{background:'#A20302',textAlign:'center',paddingTop:'3%',paddingBottom:'7%'}}>
                <p style={{fontSize:'4vw',color:'white',
                fontWeight:'200',marginBottom:0}}>Smart Fashion</p>
                <p style={{fontSize:'5vw',color:'white',fontWeight:'700',marginTop:0,marginBottom:'30px'}}>With Smart Devices</p>
                <button className="get-all-products-button">Get All Products</button>
            </div>
            <div style={{paddingTop:'7%',paddingBottom:'7%'}}>
                <div style={{width:'75%',margin:'auto',border:'2px solid lightgray',padding:'7%',borderRadius:'10px'}}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid sx={{display:'flex'}} item xs={12} md={4}>
                        <div style={{background:'#266BF9',padding:'10px',borderRadius:'10px'}}>
                        <img className="icon-img" style={{paddingTop:'8px'}} src={car} alt="" />
                        </div>
                        <div style={{paddingLeft:'8%',paddingTop:'2%'}}>
                        <h2 style={{margin:0}}>Free Shipping</h2>
                        <p style={{margin:0}}>Capped at $39 per order</p>
                        </div>
                        </Grid>
                        <Grid sx={{display:'flex'}} item xs={12} md={4}>
                        <div style={{background:'#266BF9',padding:'10px',borderRadius:'10px'}}>
                        <img className="icon-img" style={{paddingTop:'8px'}} src={card} alt="" />
                        </div>
                        <div style={{paddingLeft:'8%',paddingTop:'2%'}}>
                        <h2 style={{margin:0}}>Card Payments</h2>
                        <p style={{margin:0}}>12 Months Installments</p>
                        </div>
                        </Grid>
                        <Grid sx={{display:'flex'}} item xs={12} md={4}>
                        <div style={{background:'#266BF9',padding:'10px',borderRadius:'10px',paddingLeft:'13px',paddingRight:'13px'}}>
                        <img className="icon-img" style={{paddingTop:'8px'}} src={easyReturn} alt="" />
                        </div>
                        <div style={{paddingLeft:'8%',paddingTop:'2%'}}>
                        <h2 style={{margin:0}}>Easy Returns</h2>
                        <p style={{margin:0}}>Shop With Confidence</p>
                        </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default BottomBanner;