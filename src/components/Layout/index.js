import React from 'react';
import './style.css';
import Card from '../UI/card';

const Layout=(props)=>{
    return(
        <div style={{textAlign:'center', marginBottom:'20px'}}>
            <Card style={{borderRadius:'5px'}}>
                <div className="address">
                <div style={{width:'30%'}}>
                    <section className="companyName">
                        <h6>sri mallikarjuna swami silks</h6>
                        <p style={{margin:'0'}}>Fashion makes Life Worthful</p>
                    </section>
                </div>
                <div style={{width:'40%'}}>
                   <h7>Address:</h7>
                   <p style={{margin:'0', color:'#6c6c6c'}}>H.No. 8-61/1, Plot No. 1, Dwarakanagar, Boduppal, R.R.Dist, Hyderabad-500039.</p>
                   <p style={{margin:'0', color:'#6c6c6c'}}>TELANGANA, INDIA.</p>

                </div>
                <div className="social" >
                    <img src={require('../../Assets/icons/fb.jpg')} alt="fb"/>
                    <img src={require('../../Assets/icons/insta.jpg')} alt="insta"/>
                    <img src={require('../../Assets/icons/linkedin.jpg')} alt="linkedin"/>
                    <img src={require('../../Assets/icons/twitter.jpg')} alt="twitter"/>
                </div>
                </div>
                
            </Card>
        </div>
    )
}

export default Layout;