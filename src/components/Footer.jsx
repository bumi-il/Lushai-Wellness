import './Footer.css';
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaSpinner,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-contact'>
                <div>
                    <FaMapMarkerAlt />
                    <span>123 Main St, City, Country</span>
                </div>
                <div>
                    <FaPhone />
                    <span>(123) 456-7890</span>
                </div>
                <div>
                    <FaEnvelope />
                    <span>lushai@example.com</span>
                </div>
            </div>
            <div className='social'>
                {/* <FaSpinner /> */}
                <span><FaSpinner /> Follow Us</span>
                <div className='icons'>
                    <a href='https://www.facebook.com' target='_blank'>
                        <FaFacebook />
                    </a>
                    <a href='https://www.twitter.com' target='_blank'>
                        <FaTwitter />
                    </a>
                    <a href='https://www.linkedin.com' target='_blank'>
                        <FaLinkedin />
                    </a>
                    <a href='https://www.instagram.com' target='_blank'>
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
