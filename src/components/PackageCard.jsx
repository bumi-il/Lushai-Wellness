import './PackageCard.css';
import temp from '../assets/monstera.jpg';

const PackageCard = ({ treatment }) => {
    return (
        <div className='package-card'>
            <img
                src={temp}
                alt='image'
                className='package-card-image'
            />
            <div className='package-card-info-overlay'>
                <div className='package-card-info'>
                    <h1>{treatment.title}</h1>
                    <p>{treatment.duration}</p>
                    <p>{treatment.price}</p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nesciunt voluptatibus dicta pariatur cumque,
                        tempora ea voluptatem voluptate. Inventore, quis culpa
                        reprehenderit quos neque tempore dicta recusandae
                        perferendis cumque autem quasi.
                    </p>
                </div>
                <button className='book-btn'>Book Now</button>
            </div>
        </div>
    );
};

export default PackageCard;
