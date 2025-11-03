import { useEffect } from 'react';

import FeaturesList from './FeaturesList';
import CrisisSection from './CrisisSection';
import IndustriesSection from './IndustriesSection';

import './styles.css';


const NeuraTrace = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className='neura-trace-container'>
            <CrisisSection />
            <FeaturesList />
            <IndustriesSection />
        </div>
    );
};  

export default NeuraTrace;