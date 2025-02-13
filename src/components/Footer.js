import './Footer.css'
import logo from '../images/KDC_logo.png'
import facebook from '../images/Facebook.png'
import instagram from '../images/Instagram.png'
import linkedin from '../images/Linkedin.png'

function Footer() {
    return (
        <div>
        <footer>
            <div className='col-one'>
                <img src={logo} alt='logo'/>
                <p>KDgitialCurry is a Leading Mobile and Web App 
                Development Company in Mumbai with over 10+
                Years of Experience Create Human-Centric,
                Scalable Solutions Delivering Full-Stack Services
                Accross Various Domains.</p>

                <div className='socio-icon'>
                    <img src={facebook} alt='facebook'/>
                    <img src={instagram} alt='instagram' />
                    <img src={linkedin} alt='linkedin'/>
                </div>
            </div>

            <div className='col-two'>
                <p>Services</p>
                <ul>
                    <li>Mobile App Development</li>
                    <li>Web & CMS Development</li>
                    <li>ECommerce Development</li>
                    <li>Search Engine Optimization</li>
                    <li>Hire Dedicated Resource</li>
                    <li>UI / UX Design</li>
                    <li>Custom Software Development</li>
                </ul>
            </div>

            <div className='col-three'>
                <p>Explore Careers</p>
                <ul>
                    <li>Sr. PHP Developer</li>
                    <li>Sr. MERN Developer</li>
                    <li>IOS Developer</li>
                    <li>UI / UX Designer</li>
                    <li>Flutter Developer</li>
                    <li>Project Manager</li>
                    <li>Android Developer</li>
                </ul>
            </div>
        </footer>
        <p className='copyright'>Copyright @ 2024 KDIGITALCURRY. All Rights Reserved</p>
        </div>
    )
}

export default Footer
