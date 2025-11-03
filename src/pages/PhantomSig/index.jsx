import { useEffect } from 'react';

import FeaturesList from './FeaturesList';
import CrisisSection from './CrisisSection';
import IndustriesSection from './IndustriesSection';

import './styles.css';


const PhantomSig = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className='technology-container'>
            <CrisisSection />
            <FeaturesList />
            <IndustriesSection />
        </div>
    );
};  

export default PhantomSig;