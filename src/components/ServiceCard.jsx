import { NavLink } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    return (
        <div className='service-card'>
            <NavLink
                to={`packages?category=${service.id}` || 'skin-care'}
            >
                <div className='image-container'>
                    <img
                        src={service.image}
                        alt={service.title}
                    />
                    <div className='overlay' />
                </div>
                <h1>{service.label.toUpperCase()}</h1>
                <p>{service.description}</p>
            </NavLink>
        </div>
    );
};

export default ServiceCard;
