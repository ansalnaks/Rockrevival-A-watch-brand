
import { Container } from 'react-bootstrap'
import { Facebook, Instagram, Link, Twitter, Youtube } from 'react-bootstrap-icons'

function Footer() {
    return (
        <footer className='footer'>
            <Container>
                <div className='footer-top'>
                    <h3>ROCK REVIVAL</h3>
                    <p>Crafted Timepieces for the Modern Era</p>
                </div>
                <div className='footer-links'>
                    <div>
                        <h5>Collections</h5>
                        <Link to="/men">Men</Link>
                        <Link to="/women">Women</Link>
                        <Link to="/ls">Limited Edition</Link>
                    </div>
                    <div>
                        <h5>Company</h5>
                        <Link to="/about">About us</Link>
                        <Link to="/her">Heritage</Link>
                        <Link to="/acreer">Careers</Link>
                    </div>
                    <div>
                        <h5>Legal</h5>
                        <Link to="/poli">Privacy Notice</Link>
                        <Link to="/cook">Cookie Notice</Link>
                        <Link to="/sett">Cookie Settings</Link>
                        <Link to="/tou">Terms of use</Link>
                    </div>
                    <div>
                        <h5>Support</h5>
                        <Link to="/contact">Contact</Link>
                        <Link to="/warr">Warrenty</Link>
                        <Link to="/service">Service Centers</Link>
                    </div>
                    <div className="rr-newsletter">
                        <h2>Join the RR Family</h2>
                        <div className="rr-input-wrap">
                            <input type="email" placeholder="Enter your email address"/>
                            <button>Subscribe</button>
                        </div>
                    </div>


                </div>
                <div className='footer-soci'>
                    <Facebook />
                    <Instagram />
                    <Twitter />
                    <Youtube />
                </div>
                <div className='footer-bottom'>
                    © 2026 Rock Revival. All Rights Reserved.
                </div>

            </Container>
        </footer>
    )
}

export default Footer