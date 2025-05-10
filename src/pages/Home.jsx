import ServiceCard from '../components/ServiceCard';
import './Home.css';
import candle from '../assets/candle.jpg';
import monstera from '../assets/monstera.jpg';
import stones from '../assets/stones.jpg';
import spa from '../assets/spa.jpg';
import treatments_categories from '../data/treatments_categories.json';

// const services = [
//     {
//         title: 'THERAPEUTIC MASSAGES',
//         description: 'Deep tissue, Swedish, and hot stone - to needs.',
//         image: stones,
//     },
//     {
//         title: "COUPLES' RETREAT",
//         description: 'A shared massage experience to relax and reconect.',
//         image: candle,
//     },
//     {
//         title: 'GLOW FACIALS',
//         description: 'Personalized treatment using gentle-plant-based products',
//         image: monstera,
//     },
//     {
//         title: 'SPA',
//         description: 'A relaxing spa experience to rejuvenate and unwind.',
//         image: spa,
//     },
// ];

const services = treatments_categories
    .filter((category) => category.id !== 'packages')

const features = [
    'Tranquil environment inspired by natural tones and textures',
    'Certified, experienced therapists',
    'Organic oils and skincare',
    'Flexible booking and easy rescheduling',
];

const Home = () => {
    return (
        <div className='home'>
            <div className='section-1'>
                <div>
                    <h1>
                        WELCOME TO <br /> LUSHAI WELLNESS
                    </h1>
                    <h3>A SANCTUARY OF PEACE, TOUCH, AND NATURAL BEAUTY</h3>
                </div>
                <img
                    src='https://images.unsplash.com/photo-1583417267826-aebc4d1542e1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt='image'
                />
            </div>
            <div className='services'>
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        service={service}
                    />
                ))}
            </div>
            <div className='why-lushai'>
                <img
                    src={spa}
                    alt='image'
                />
                <div>
                    <h1>WHY CHOOSE LUSHAI WELLNESS?</h1>
                    <ul className='features'>
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <button className='book-btn-home'>Book Now</button>
        </div>
    );
};

export default Home;
