
import { Container } from 'react-bootstrap'
import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons'

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
                        <a href="">Men</a>
                        <a href="">Women</a>
                        <a href="">Limited Edition</a>
                    </div>
                    <div>
                        <h5>Company</h5>
                        <a href="">About us</a>
                        <a href="">Heritage</a>
                        <a href="">Careers</a>
                    </div>
                    <div>
                        <h5>Legal</h5>
                        <a href="">Privacy Notice</a>
                        <a href="">Cookie Notice</a>
                        <a href="">Cookie Settings</a>
                        <a href="">Terms of use</a>
                    </div>
                    <div>
                        <h5>Support</h5>
                        <a href="">Contact</a>
                        <a href="">Warrenty</a>
                        <a href="">Service Centers</a>
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