import React,{useState,useEffect} from 'react';
import './style.css';
import Card from '../UI/card';
import blogPost from '../../data/data.json';
import { NavLink } from 'react-router-dom';

const SideBar=(props)=>{
    const[posts,setPosts]=useState([]);
    useEffect(()=>{
       
        const posts=blogPost.data;
        setPosts(posts);
    },[posts]);

    return (
       <div className="sideBarContainer">
           <Card style={{borderRadius:'5px', marginBottom:'20px'}}>
               <div className="sideBarHeader">
                  <span>about us</span>
               </div>
               <div className="profileImageContainer">
                   <img src={require('../../blogPostImages/profile.jpg')} alt="mahendar"/>
               </div>
               <div>
                   <p className="postBio">Hello, we are Jagan-Pallavi. We are having an Experience of 10+ years in the field of Clothing. We assure you in giving the best designer works which suits your Physique. We under-take the order of Designing wear (Western & Cultural) for Parties and Functions.</p>
               </div>
           </Card>
           <Card style={{borderRadius:'5px', marginBottom:'20px'}}>
               <div className="sideBarHeader">
                  <span>social media</span>
                  <div className="socialMedia" >
                    <img src={require('../../Assets/icons/fb.jpg')} alt="fb"/>
                    <img src={require('../../Assets/icons/insta.jpg')} alt="insta"/>
                    <img src={require('../../Assets/icons/linkedin.jpg')} alt="linkedin"/>
                    <img src={require('../../Assets/icons/twitter.jpg')} alt="twitter"/>
                </div>
               </div>
           </Card>
           <Card style={{borderRadius:'5px', marginBottom:'20px'}}>
               <div className="sideBarHeader">
                  <span>Recent Posts</span>
               </div>
               <div className="recentPosts" style={{marginLeft:'10px'}}>
                   {
                       posts.map(post=>{
                           return(
                               <NavLink key={post.id} to={`/post/${post.id}`}>
                                   <div className="recentPost">
                                   <h2>{post.blogTitle}</h2>
                                   <span style={{fontStyle:'italic'}}>{post.postedOn}</span>
                                   </div>
                               </NavLink>
                            
                           );
                       })
                   }
               
               
               </div>
           </Card>
       </div>
    )
}

export default SideBar;
