import FeaturesList from './FeaturesList';
import PhoneFeature from './PhoneFeature';
import './styles.css';

const Technology = () => {
    return (
        <div className='technology-container'>
            <h1>The Technology</h1>
            <FeaturesList />
            {/* <PhoneFeature /> */}
        </div>
    );
};  

export default Technology;