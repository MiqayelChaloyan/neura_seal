import FeaturesList from './FeaturesList';
import CrisisSection from './CrisisSection';
import IndustriesSection from './IndustriesSection';
import HowItWorks from './HowItWorks';
import AboutUs from './AboutUs';
import Test from '../HowItWorks/Test';

import './styles.css';


const Technology = () => {
    return (
        <div className='technology-container'>
            <CrisisSection />
            <FeaturesList />
            <IndustriesSection />
            <HowItWorks />
            <AboutUs />
            {/* <Test /> */}
        </div>
    );
};  

export default Technology;