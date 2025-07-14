import FeaturesList from './FeaturesList';
import CrisisSection from './CrisisSection';
import IndustriesSection from './IndustriesSection';
import HowItWorks from './HowItWorks';

import './styles.css';


const Technology = () => {
    return (
        <div className='technology-container'>
            <CrisisSection />
            <FeaturesList />
            <IndustriesSection />
            <HowItWorks />

        </div>
    );
};  

export default Technology;