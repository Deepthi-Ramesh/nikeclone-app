import React from "react";
import "./card.css"
function Card(props){
    const { heading , image , spirit  ,mainhead , description , button, alignItems} = props
    return(
        <article>
             <div className="card">
                <div className="head-div">
                  <p className="heading">{heading}</p>
                </div>
                <div  className="image">
                    <img src={image} alt=""/>
                </div>
               <div className="small-container" style={{alignItems : "right"}}>
                    <p className="category-spirit">{spirit}</p>
                    <p className="main-heading">{mainhead}</p>
                    <p className="description">{description}</p>
               </div>
                <button className="btn">{button}</button> 
                </div>  
        </article>
    )
}
export default Card