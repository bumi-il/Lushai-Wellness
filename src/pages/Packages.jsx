import './Packages.css';
import treatments_categories from '../data/treatments_categories.json';
import treatments_list from '../data/treatments_list.json';
import spa from '../assets/spa.jpg';
import { useState } from 'react';
import PackageCard from '../components/PackageCard';
import Hero from '../components/Hero';

const Packages = () => {
    let query_string = window.location.search;
    if (query_string) {
        query_string = query_string.split('=')[1];
        query_string = treatments_categories.find(
            (category) => category.id === query_string
        )?.label;
    }

    // console.log(query_string.split('=')[1]);

    const [selectedPackage, setSelectedPackage] = useState(
        query_string || treatments_categories[0].label
    );

    return (
        <div className='packages'>
            <Hero>
                this is packages
            </Hero>
            <div className='packages-nav'>
                {treatments_categories.map(({ label }, index) => (
                    <div
                        key={index}
                        className={
                            label === selectedPackage
                                ? 'package active-package'
                                : 'package'
                        }
                        onClick={() => setSelectedPackage(label)}
                    >
                        <p>{label}</p>
                    </div>
                ))}
            </div>
            <div className='packages-cards'>
                {treatments_list
                    .filter(
                        (treatment) => treatment.category === selectedPackage
                    )
                    .map((treatment, index) => (
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
