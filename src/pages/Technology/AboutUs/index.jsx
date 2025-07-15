import './styles.css';

import aboutUsImage from '../../../assets/who_neural_seal.png';

const AboutUs = () => {
    return (
       <div className='about-us-section'> 
        <div className='about-us-contain'>
            <div className='about-us-content'>
                <h1>Why Neural Seal?</h1>
            </div>


            <img src={aboutUsImage} alt='about-us-image' />
        </div>
        </div>
    );
};

export default AboutUs; 