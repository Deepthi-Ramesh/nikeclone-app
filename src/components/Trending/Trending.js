import React from "react";
import "./Trending.css"
function Trending(props){
    const {image , para , btncolor , btntext ,btncontent ,width  } = props
    return(
            <div className="trend-card" 
            style={{
                backgroundImage :`url(${image})`,
                backgroundRepeat : "no-repeat",
                backgroundSize : "100% 100%",
                width : width
                }}> 
               <div className="card-para" >
                    <p 
                      style={
                        {
                            color : btncolor
                        }
                    }>{para}</p>
                    <button className="button"
                       style={
                           {
                             backgroundColor : btncolor,
                             color : btntext ,
                           }
                       }
                    >{btncontent}</button>
               </div>
            </div>
    )
}
export default Trending