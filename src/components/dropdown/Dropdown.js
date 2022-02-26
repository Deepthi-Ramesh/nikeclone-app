import React ,{useState,useEffect} from "react";
import "./dropdown.css"
function  Dropdown(props){
    const {name,data} = props
    const [click,setclick] = useState(false)
    function show(){
        setclick(!click)
    }
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 600px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(min-width: 670px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);
    return(
        <div className="eachdown">
            <p onClick={show} className="eachdown-para">{name}</p>
            {!matches ? (<div className="dropdown1">{click &&
            <ul>
                {data.map(item=>{
                    return <li>{item}</li>
                })}
                </ul>}
            </div>):(<div className="dropdown1">
            <ul>
                {data.map(item=>{
                    return <li>{item}</li>
                })}
                </ul>
            </div>)}
        </div>
    )
}
export default Dropdown