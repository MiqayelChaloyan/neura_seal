import { useEffect } from 'react';

import FeaturesList from './FeaturesList';
import CrisisSection from './CrisisSection';
import IndustriesSection from './IndustriesSection';

import './styles.css';
import VideoSection from './VideoSection';


const PhantomSig = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className='phantom-sig-container'>
            <CrisisSection />
            <VideoSection/>
            <FeaturesList />
            <IndustriesSection />
        </div>
    );
};  

export default PhantomSig;