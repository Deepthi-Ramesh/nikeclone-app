import React,{useState,useEffect} from "react";
import './footer.css'
import { Icon } from '@iconify/react';
import { guides } from "../../data";
 function Footer(){
     const [visible,setvisible] = useState(false)
     const [about,setabout] = useState(false)
     const [hover,sethover] = useState(false)
     function dropdown(){
         setvisible(!visible)
     }
     function dropdown1(){
        setabout(!about)
    }
        const [matches, setMatches] = useState(
          window.matchMedia("(min-width: 599px)").matches
        )
      
        useEffect(() => {
          window
          .matchMedia("(min-width: 599px)")
          .addEventListener('change', e => setMatches( e.matches ));
        }, []);
     return(
         <div className="main-footer">
             <div className="foot-1">
                 <div className="options">
                     <div className="features">
                         <ul>
                             <li>FIND A STORE</li>
                             <li>BECOME A MEMBER</li>
                             <li>SIGN UP FOR EMAIL</li>
                             <li>STUDENT DISCOUNTS</li>
                             <li>SEND US FEEDBACK</li>
                         </ul>
                     </div>
                     <div className="get-help">
                        <div className="help-flex">
                        <p>GET HELP</p>
                         <button onClick={dropdown} className="btn">
                             {!matches ? (visible ? "-" : "+" ): null}
                         </button>
                        </div>
                        {!matches ? ( <div className="gethelp-opt">{visible &&
                             <ul>
                                 <li>Order Status</li>
                                 <li>Delivery</li>
                                 <li>Returns</li>
                                 <li>Payment Options</li>
                                 <li>Contact Us On Nike.com</li>
                                 <li>Inquiries</li>
                                 <li>Contact Us On All other</li>
                             </ul>
                          }</div>) : (<div className="gethelp-opt">
                            <ul>
                                <li>Order Status</li>
                                <li>Delivery</li>
                                <li>Returns</li>
                                <li>Payment Options</li>
                                <li>Contact Us On Nike.com Inquiries</li>
                                <li>Contact Us On All other Inquiries</li>
                            </ul>
                         </div>)}
                        
                         </div>
                     <div className="about">
                     <div className="help-flex">
                        <p>ABOUT NIKE</p>
                         <button onClick={dropdown1} className="btn">
                         {!matches ? (about ? "-" : "+" ): null}
                         </button>
                        </div>
                        {!matches ? ( <div className="gethelp-opt">{about &&
                             <ul>
                                 <li>News</li>
                                 <li>Careers</li>
                                 <li>Investors</li>
                                 <li>Sustainability</li>
                             </ul>
                          }</div>) : (<div className="gethelp-opt">
                            <ul>
                                 <li>News</li>
                                 <li>Careers</li>
                                 <li>Investors</li>
                                 <li>Sustainability</li>
                            </ul>
                         </div>)}
                     </div>
                 </div>
                 <div className="social-media">
                    <div className="icon"><Icon icon="mdi:twitter" fontSize={"1rem"} style={{ color:"black"}}/></div>
                    <div className="icon"><Icon icon="gg:facebook" fontSize={"1rem"} style={{ color:"black"}}/></div>
                    <div className="icon"><Icon icon="ps:youtube"  fontSize={"1rem"}  style={{ color:"black"}}/></div>
                    <div className="icon"><Icon icon="entypo-social:instagram" fontSize={"1rem"} style={{ color:"black"}}/></div>
                 </div>
             </div>
            
             <div className="foot-2">
                 <div className="foot-2-loc">
                     <div className="location">
                     <Icon icon="carbon:location-filled" />
                       India</div>
                     <div className="copyrights">
                     © 2022 Nike, Inc.All Rights Reserved</div>
                 </div>
                 <div className="termsandConditions">
        
                     <ul>
                         <li onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)}>Guides</li>
                         <li>Terms Of Sale</li>
                         <li>Terms of Use</li>
                         <li>Nike Privacy Policy</li>
                     </ul>
                 </div>
             </div>
         </div>
     )
 }
 export default Footer