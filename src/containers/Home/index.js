import React from 'react';
import './style.css';
import Card from '../../components/UI/card';
import Sidebar from '../../components/SideBar';

const Home=props=>{
    const gallaryHeight=400;
    const gallaryStyle={
        height:gallaryHeight+'px',
        overflow:'hidden' 
    }
    const sideHeight=gallaryHeight/3;
    return(
        <div>
            <Card>
                <div className="gallaryPost" style={{gallaryStyle}} >
                   <section style={{width:'70%'}}>
                       <div className="mostPopular">
                           <img src={require('../../blogPostImages/gallary1.jpg')}alt=""/>
                       </div>
                   </section>
                   <section className="sideWrapper" style={{width:'30%'}}>
                       <div className="lessPopular" style={{height:`${sideHeight}px`}}>
                       <img src={require('../../blogPostImages/gallary2.webp')}alt=""/>
                       </div>
                       <div className="lessPopular" style={{height:`${sideHeight}px`}}>
                       <img src={require('../../blogPostImages/gallary3.jpg')}alt=""/>
                       </div>
                       <div className="lessPopular" style={{height:`${sideHeight}px`}}>
                       <img src={require('../../blogPostImages/gallary4.jpg')}alt=""/>
                       </div>
                   </section>
                </div>
            </Card>
            
            <section className="homeContainer">
            <div style={{width:'70%'}}>
            <Card style={{marginBottom:'10px',borderRadius:'5px'}}>
                <div className="postImageWrapper">
                    <img src={require('../../blogPostImages/indian-traditional-wear.jpg')}/>
                </div>
                <div className="postHeader" style={{textAlign:'center'}}>
                    <span style={{fontSize:'20px', color:'#6c6c6c'}}>Featured</span>
                    <h4>Traditional Outfit</h4>
                    <span style={{fontStyle:'italic'}}>Posted on July 21, 2016 by Jagan Mohan</span>
                    <p style={{color:'#6c6c6c'}}>Traditional dress may be defined as the ensemble of garments, jewelry, and accessories rooted in the past that is worn by an identifiable group of people. Though slight changes over time in color, form, and material are acknowledged, the assemblage seems to be handed down unchanged from the past. Traditional dress or costume is a phrase used widely both by the general public and writers on dress. It conjures up images of rural people dressed in colorful, layered, exotic clothing from an idealized past in some faraway place. This notion of traditional dress has been scrutinized and found inadequate by many researchers and scholars, but its uncritical use continues into the twenty-first century. The phrase traditional dress or costume is often used interchangeably with the terms ethnic, regional, and folk dress.

</p>
                    <button>Read More</button>
                </div>
            </Card>
            <Card  style={{marginBottom:'10px',borderRadius:'5px',marginBottom:'10px'}}>
                <div className="postImageWrapper">
                    <img src={require('../../blogPostImages/western-summer-outfits.jpg')}/>
                </div>
                <div className="postHeader" style={{textAlign:'center'}}>
                    <span style={{fontSize:'20px', color:'#6c6c6c'}}>Simple</span>
                    <h4>Western Summer Outfits</h4>
                    <span style={{fontStyle:'italic'}}>Posted on May 3rd, 2016 by Pallavi</span>
                    <p style={{color:'#6c6c6c'}}>Western wear is a category of men's and women's clothing which derives its unique style from the clothes worn in the 19th century Wild West. It ranges from accurate historical reproductions of pioneer, mountain man, Civil War, cowboy and vaquero clothing to the stylized garments popularized by singing cowboys such as Gene Autry and Roy Rogers in the 1940s and 1950s. Western wear can be very informal, with a t-shirt and blue jeans forming a basic ensemble, or it may consist of tailored formal garments with western accents. At minimum, western wear generally incorporates a cowboy hat, a leather belt, and cowboy boots.</p>
                    <button>Read More</button>
                </div>
            </Card> 
            </div>
            <Sidebar/>
            </section>
            

        </div>
    )
}

export default Home;