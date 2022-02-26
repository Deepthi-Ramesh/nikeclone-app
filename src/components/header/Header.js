import React, { useState } from "react"
import { Icon } from '@iconify/react';
import "./header.css"
import { mens } from "../../data";
function Header(){
    const [clicked,setclicked] =useState(false)
    const [locked, setLocked] = useState(false);
    return(
        <div>
        <nav className="Navbaritems">
            <div className="logo">
               <Icon icon="simple-icons:nike" fontSize={"4rem"}/>
            </div>
            <ul className={clicked ? 'nav-menu active': 'nav-menu'}>
                <li onMouseEnter={() => setLocked(true)} onMouseLeave={() => setLocked(false)}>Mens</li>
                <li onMouseEnter={() => setLocked(true)} onMouseLeave={() => setLocked(false)}>Womens</li>
                <li  onMouseEnter={() => setLocked(true)} onMouseLeave={() => setLocked(false)}>Customise</li>
                <li  onMouseEnter={() => setLocked(true)} onMouseLeave={() => setLocked(false)}>kids</li>
                <li  onMouseEnter={() => setLocked(true)} onMouseLeave={() => setLocked(false)}>Sale</li>
                <li  onMouseEnter={() => setLocked(true)} onMouseLeave={() => setLocked(false)}>SNKRS</li>
            </ul>
       <div className="iconsandsearch">
       <div  className="search-bar">
               <Icon icon="akar-icons:search" fontSize={"1.5rem"}/>
               <input type="text" placeholder="Search"/>
            </div>
            <div className="heart"><Icon icon="akar-icons:heart" fontSize={"1.5rem"} /></div>
            <div className="shopping-bag"><Icon icon="ion:bag-outline" fontSize={"1.5rem"} /></div>
            <div className="mobile-search">
               <Icon icon="akar-icons:search" fontSize={"1.3rem"}/>
            </div>
            <div className="menu-icon" onClick={()=>(setclicked(!clicked))}>
            {clicked ? <Icon icon="ep:close-bold" fontSize={"1.5rem"}/> : <Icon icon="icon-park:hamburger-button" fontSize={"1.5rem"} />}
            </div>
       </div>
          
        </nav>
        {locked ? (<div className="header-hover">
               {mens.map(item => {
                   return<li>{item}</li>
               })}
           </div>):null}
        </div>
    )
}
export default Header