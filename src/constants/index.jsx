// Svg
import arrowIcon from "../assets/svg/noun-arrow.jsx";
import FacebookIcon from "../assets/svg/FacebookIcon.jsx";
import YoutubeIcon from "../assets/svg/YoutubeIcon.jsx";
import TwitterIcon from "../assets/svg/TwitterIcon.jsx";
import InstagramIcon from "../assets/svg/InstagramIcon.jsx";
import LinkedInIcon from "../assets/svg/LinkedInIcon.jsx";
import LogoIcon from "../assets/svg/LogoIcon.jsx";

// Images
import visualImg from "../assets/images/visual.webp";
import crisis_image from "../assets/images/crisis_image.webp";
import how_it_work from "../assets/images/how_it_work.webp";
import who_neural_seal from "../assets/images/who_neural_seal.webp";
import features_bg from "../assets/images/features_bg.webp";
import features_bg_2 from "../assets/images/features_bg_2.webp";
import trace_1 from "../assets/images/trace_1.webp";
import trace_2 from "../assets/images/trace_2.webp";

import klingMp3 from "../assets/videos/kling.mov";

// Constants
import HowItWorksConstants from "./howItWorks.jsx";


const ImagePaths = {
    visualImg: visualImg,
    crisis_image: crisis_image,
    how_it_work: how_it_work,
    who_neural_seal: who_neural_seal,
    features_bg: features_bg,
    features_bg_2: features_bg_2,
    trace_1: trace_1,
    trace_2: trace_2
};

const VideoPaths = {
    klingMp3: klingMp3,
};

const SvgPaths = {
    arrowIcon: arrowIcon,
    facebookIcon: FacebookIcon,
    youtubeIcon: YoutubeIcon,
    twitterIcon: TwitterIcon,
    instagramIcon: InstagramIcon,
    linkedinIcon: LinkedInIcon,
    logoIcon: LogoIcon,
};

const Titles = {
    whoWeAre: 'Who We Are',
    theTechnology: 'The Technology',
    contactUs: 'Contact Us',
    thePhantomSig: 'PhantomSig',
    phantomSig: 'Phantom Sig',
    neuraTrace: 'NeuraTrace',
    theCrisis: 'The Crisis'
};

const Texts = {
    builtToKnow: 'Built to Know',
    whoWeAreText:  `We are Neura — a frontier R&D lab of engineers and mathematicians building intelligent systems that tackle global threats. From the next evolution in anti-counterfeiting and tax tracking to advanced communication technologies that secure missions from the ground to space, our solutions are scalable, impenetrable, and built to redefine how the world establishes trust and harnesses intelligence.
At our core, we combine AI with physics and engineering to create systems that see patterns others miss, secure information others can’t, and predict threats before they emerge.`,
    missionText: 'To build enduring systems of intelligence that enable new frontiers across industries and nations.',    
    visionText: 'To craft masterpieces of intelligence — built to stand the test of time',
    qualityPolicy: 'Quality Policy',
    copyright: '© Copyright 2025. All Rights Reserved',
    counterfeitingText: `PhantomSig`,
    counterfeitingTextLine1: 'Counterfeiting drains trillions from the global economy,',
    counterfeitingTextLine2: 'destabilizes industries, and destroys trust.',
    weBuiltTheTechnologyToEndIt: `Next-generation, lightweight secure signal transmission \n system for tactical operations and satellite \n communication. Designed to remain impenetrable, undetectable, \n and resilient against jamming, interception, or disruption, \n PhantomSig™ turns every transmission into a ghost.`,

    neuraTracedescription_1: 'NeuraTrace™ is a world class tax-tracking system built \n not just to track evasion, but to prevent it at the source.',
    neuraTracedescription_2: 'Tax evasion is more than lost revenue.',
    neuraTracedescription_2_1: 'It funds black markets. \n It fuels smuggling networks. \n It weakens borders and undermines sovereignty.',
    neuraTracedescription_2_2: 'Unchecked, it becomes a threat to national security. \n We built the technology to defend against it.'
};

const Buttons = {
    sendMessage: 'Send Message',
};

const Labels = {
    name: 'Name',
    address: 'Address',
    email: 'Email',
    message: 'Message',
};

export {
    ImagePaths,
    Titles,
    Texts,
    Buttons,
    Labels,
    SvgPaths,
    HowItWorksConstants,
    VideoPaths
};