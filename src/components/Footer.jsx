
import { Container } from 'react-bootstrap'
import { Facebook, Instagram,Twitter, Youtube } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

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
                        <Link to="/men" className="footer-link">Men</Link>
                        <Link to="/women" className="footer-link">Women</Link>
                        <Link to="/ls" className="footer-link">Limited Edition</Link>
                    </div>
                    <div>
                        <h5>Company</h5>
                        <Link to="/about" className="footer-link">About us</Link>
                        <Link to="/her" className="footer-link">Heritage</Link>
                        <Link to="/acreer" className="footer-link">Careers</Link>
                    </div>
                    <div>
                        <h5>Legal</h5>
                        <Link to="/poli" className="footer-link">Privacy Notice</Link>
                        <Link to="/cook" className="footer-link">Cookie Notice</Link>
                        <Link to="/sett" className="footer-link">Cookie Settings</Link>
                        <Link to="/tou" className="footer-link">Terms of use</Link>
                    </div>
                    <div>
                        <h5>Support</h5>
                        <Link to="/contact" className="footer-link">Contact</Link>
                        <Link to="/warr" className="footer-link">Warrenty</Link>
                        <Link to="/service" className="footer-link">Service Centers</Link>
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