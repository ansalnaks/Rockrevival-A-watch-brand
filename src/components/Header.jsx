import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Heart, List, Search ,Bag,X} from 'react-bootstrap-icons'
import logorockre from '../../src/assets/logorockre-removebg-preview.png'
import './style.css'

function Header() {
    const [menuOpen,setMenuOpen]=useState(false)
    return (
        <>
            <div className='offtag'>
                {/* <img src={logorockre} alt="" /> */}
                <p>
                    Limited Time offer - <span> upto 25 % off on Select Timepieces</span>
                </p>
            </div>
        <header className='videoh'>
            <video autoPlay muted loop className='bg-video' src=""> <source src="https://www.rado.com/media/sgecom_contentsystem/Landing/India_Gifting/HR_KK_wedding_lp_hero2560X1080_3.5.mp4" type="video/mp4"/> </video>
            <div className='videol'> 
            </div>
           

            <div className="top-gradient"></div>
            <Container className='hc'>
             <div className='hrow'>
                <div className='lh'>
                    <List size={28} onClick={()=>setMenuOpen(true)}></List>
                </div>
                <div className='ch logo-glass'>
                    <img src={logorockre} alt="rock revival" />
                </div>
                {/* <div className='rh' style={{margin:"3px"}}>
                    <Search  size={25}/>
                    <Heart  size={25} />
                    <Bag  size={25} />
                </div> */}
            </div>
            </Container>
             <div className='vcont'>
                 <h2>This Time is Now</h2>
                <h4>Discover more</h4>
            </div>
        </header>

        <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
            <div className='menu-header'>
                <X size={28} onClick={() => setMenuOpen(false)} />
            </div>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>Home</li>
                <li  onClick={()=>setMenuOpen(false)}>About</li>
                <li  onClick={()=>setMenuOpen(false)}>Category</li>
                <li onClick={()=>setMenuOpen(false)}>Login</li>
            </ul>
             </div>
            {menuOpen && <div className="menu-backdrop" onClick={() => setMenuOpen(false)}></div>}
       
        </>
    )
}

export default Header

