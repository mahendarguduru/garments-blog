import React from 'react';
import './style.css';
import Card from '../../components/UI/card';

const ContactUs=(props)=>{
    return(
        <div>
            <Card style={{borderRadius:'5px',margin:'10px 0'}}>
                <div className="contact">
                <section className="phone" >
                    <img  src={require('../../Assets/icons/phone.jpg')} alt="phone"/>
                    <p>9866231334 , 720786173</p>
                </section>
                <section className='mail'>
                    <img src={require('../../Assets/icons/mail.jpg')} alt='mail'/>
                    <p style={{padding:'0 10px'}}>pallaviguduru486@gmail.com</p>
                </section>
                </div>
                
                <section className="whatsapp">
                    <img src={require('../../Assets/icons/whatsapp.jpg')} alt="whatsapp"/>
                    <p>9866231334</p>
                </section>
            </Card>
        </div>
    )
}

export default ContactUs;