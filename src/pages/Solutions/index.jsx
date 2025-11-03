import { useEffect } from 'react';

import FeaturesList from './FeaturesList';
import CrisisSection from './CrisisSection';
import IndustriesSection from './IndustriesSection';
import HowItWorks from './HowItWorks';
import AboutUs from './AboutUs';

import './styles.css';


const Solutions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className='solutions-container'>
            <CrisisSection />
            <FeaturesList />
            <IndustriesSection />
            <HowItWorks />
            <AboutUs />
        </div>
    );
};  

export default Solutions;