import { ImagePaths } from '../../../constants';

import './styles.css';


const AboutUs = () => {
    return (
       <div className='about-us-section'> 
        <div className='about-us-section-border-wrapper'>
            <div className='about-us-section-container'>
                <div className='about-us-contain'>
                    <div className='about-us-content'>
                        <h1>Why Neural Seal?</h1>
                    </div>
                    <img src={ImagePaths.who_neural_seal} alt='about-us-image' loading="lazy" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default AboutUs; 