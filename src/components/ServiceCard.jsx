import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    return (
        <div className='service-card'>
            <div className='image-container'>
                <img
                    src={service.image}
                    alt={service.title}
                />
                <div className='overlay' />
            </div>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
        </div>
    );
};

export default ServiceCard;
