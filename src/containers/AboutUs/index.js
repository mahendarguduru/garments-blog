import React from 'react'
import './style.css';
import Card from '../../components/UI/card';

const AboutUs=(props)=> {
    return (
        <div className="aboutUs" >
            <Card style={{width:"35%",borderRadius:'5px'}}>
            <section >
                <div className="photo" >
                    <img style={{borderRadius:'5px'}} src={require('../../blogPostImages/profile.jpg')} alt=""/>
                </div>
            </section>
            </Card>
            <Card style={{borderRadius:'5px'}} >
            <section className="discription">
                <p>Hello, we are Jagan-Pallavi. We are having an Experience of 10+ years in the field of Clothing. We assure you in giving the best designer works which suits your Physique. We under-take the order of Designing wear (Western & Cultural) for Parties and Functions.</p>
            </section>
            </Card>
            
        </div>

    )
}

export default AboutUs;
