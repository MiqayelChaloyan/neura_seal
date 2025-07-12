import { ImagePaths } from "../../constants";
import './styles.css';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="who-we-are">
                <div className="content">
                    <h1>Who We Are</h1>
                    <p>
                        We're a team of engineers tackling one of the world's most damaging and
                        overlooked threats: counterfeiting. We've built the next evolution in product
                        and document security — an impenetrable, scalable authentication system
                        redefining how the world proves authenticity. We don't just stop counterfeiting;
                        we ensure it never happens again.
                    </p>
                </div>
                <div className="visual">
                    <img src={ImagePaths.meshImageURL} alt="Abstract mesh face" />
                </div>
            </div>
            <div className="mission-vision-section">
                <div className="row">
                    <h2 className="title">MISSION</h2>
                    <p className="description">
                        We exist to make counterfeiting obsolete — empowering anyone to prove authenticity
                        instantly, globally, and without compromise.
                    </p>
                </div>

                <div className="row">
                    <h2 className="title">VISION</h2>
                    <p className="description">
                        To establish the global standard for product and document authenticity – a secure, open
                        protocol that anyone, anywhere can adopt to eliminate counterfeiting at its source. This
                        is the new foundation for trust in the global marketplace.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;