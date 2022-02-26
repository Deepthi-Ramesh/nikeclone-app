import React, { useState } from "react";
import "./slidercard.css";
import { Icon } from '@iconify/react';
function Slidercard(props){
    const {img , price , productname , category} = props

    const [locked, setLocked] = useState(false);
    return(
        <>
            <div className="product" onMouseEnter={() => setLocked(true)} onMouseLeave={() => setLocked(false)}>
                <div className="imgpart" >
                  <div className="icon-div"> 
                    <Icon
                      icon="bxs:lock"
                      fontSize="large"
                      style={{
                          color:"rgb(133, 83, 83)",
                          }}/>
                    </div>
                    <img src={img}/>
                </div>
                <div className="product-description">
                    <div className="product-des1">
                        <p className="member">Member Access</p>
                        <div>
                        <p className="custom">Customise</p>
                        </div>
                        <p className="productname">{productname}</p>
                        <p className="category">{category}</p>
                    </div>
                    <div>
                        <p className="price">₹{price}</p>
                    </div>
                </div>
                { locked && <div className="locked-product">
                    <div className="para">Get this Product with<br></br> Your free Nike <br></br>Membership Profile</div>
                </div>}
        </div>
        
        </>
    )
}
export default Slidercard