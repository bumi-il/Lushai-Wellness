import './Packages.css';
import { treatments } from '../data/treatments.json';
import spa from '../assets/spa.jpg';
import { useState } from 'react';
import PackageCard from '../components/PackageCard';

const Packages = () => {
    let packages = Object.keys(treatments);

    const [selectedPackage, setSelectedPackage] = useState(packages[0]);

    return (
        <div className='packages'>
            <div className='packages-header'>
                <div>
                    <img
                        src={spa}
                        alt='image'
                        className='packages-image'
                    />
                </div>
                <div className='packages-nav'>
                    {packages.map((key, index) => (
                        <div
                            key={index}
                            className={
                                key === selectedPackage
                                    ? 'package active-package'
                                    : 'package'
                            }
                            onClick={() => setSelectedPackage(key)}
                        >
                            <p>{key}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='packages-cards'>
                {treatments[selectedPackage].map((treatment, index) => (
                    <PackageCard
                        key={index}
                        treatment={treatment}
                    />
                ))}
            </div>
        </div>
    );
};

export default Packages;
