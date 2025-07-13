import FeaturesList from './FeaturesList';
import CrisisSection from './CrisisSection';
import IndustriesSection from './IndustriesSection';

import './styles.css';


const Technology = () => {
    return (
        <div className='technology-container'>
            <CrisisSection />
            <FeaturesList />
            <IndustriesSection />
        </div>
    );
};  

export default Technology;