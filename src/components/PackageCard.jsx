import './PackageCard.css';
import { NavLink } from 'react-router-dom';
import temp from '../assets/monstera.jpg';

const PackageCard = ({ treatment }) => {
    const bgs = {
        base: 'gray',
        'add-on': 'orange',
        package: 'gold',
    };

    return (
        <div className='package-card'>
            <div className='package-card-info'>
                <h1>{treatment.name}</h1>
                <div className='package-card-details'>
                    <p style={{ backgroundColor: bgs[treatment.type], opacity: 0.5 }}>
                        {treatment.type}
                    </p>
                    <p>{treatment.duration}</p>
                    <p>{treatment.price} ₹</p>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores, ipsam animi? Asperiores alias quidem illum
                    incidunt! Aut tempora officia ab dolorum quis culpa
                    distinctio sapiente, commodi voluptas molestiae vel
                    reprehenderit?
                </p>
            </div>
            <NavLink to='/bookonline'>
                <button className='book-btn'>Book Now</button>
            </NavLink>
        </div>
    );
};

export default PackageCard;
