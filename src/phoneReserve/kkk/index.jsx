import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './styles.css';

const ThreatIntelligenceMap = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1.2]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const locations = [
        { id: 1, x: 20, y: 25, type: 'counterfeit' }, // North America
        { id: 2, x: 52, y: 22, type: 'authentic' }, // Europe
        { id: 3, x: 75, y: 20, type: 'authentic' }, // Asia
        { id: 4, x: 25, y: 55, type: 'counterfeit' }, // South America
        { id: 5, x: 85, y: 55, type: 'counterfeit' }, // Australia
        { id: 6, x: 55, y: 45, type: 'authentic' }, // Africa
    ];

    const stats = {
        scans: 1230,
        authentic: 85,
        counterfeit: 15,
        estimatedLoss: 75000
    };

    // Generate dots for continents
    const generateContinentDots = () => {
        const dots = [];
        
        // North America dots
        for (let i = 0; i < 800; i++) {
            const x = Math.random() * 25 + 5;
            const y = Math.random() * 25 + 15;
            if (isInNorthAmerica(x, y)) {
                dots.push({ x, y, continent: 'north-america' });
            }
        }
        
        // South America dots
        for (let i = 0; i < 400; i++) {
            const x = Math.random() * 15 + 15;
            const y = Math.random() * 25 + 45;
            if (isInSouthAmerica(x, y)) {
                dots.push({ x, y, continent: 'south-america' });
            }
        }
        
        // Europe dots
        for (let i = 0; i < 300; i++) {
            const x = Math.random() * 15 + 45;
            const y = Math.random() * 15 + 15;
            if (isInEurope(x, y)) {
                dots.push({ x, y, continent: 'europe' });
            }
        }
        
        // Africa dots
        for (let i = 0; i < 600; i++) {
            const x = Math.random() * 20 + 45;
            const y = Math.random() * 35 + 25;
            if (isInAfrica(x, y)) {
                dots.push({ x, y, continent: 'africa' });
            }
        }
        
        // Asia dots
        for (let i = 0; i < 1000; i++) {
            const x = Math.random() * 30 + 60;
            const y = Math.random() * 30 + 10;
            if (isInAsia(x, y)) {
                dots.push({ x, y, continent: 'asia' });
            }
        }
        
        // Australia dots
        for (let i = 0; i < 200; i++) {
            const x = Math.random() * 15 + 75;
            const y = Math.random() * 10 + 50;
            if (isInAustralia(x, y)) {
                dots.push({ x, y, continent: 'australia' });
            }
        }
        
        return dots;
    };

    // Continent shape functions
    const isInNorthAmerica = (x, y) => {
        return (x >= 5 && x <= 30 && y >= 15 && y <= 40) && 
               !(x >= 25 && y >= 35) && !(x <= 10 && y <= 20);
    };

    const isInSouthAmerica = (x, y) => {
        return (x >= 15 && x <= 30 && y >= 45 && y <= 70) && 
               !(x >= 25 && y >= 65);
    };

    const isInEurope = (x, y) => {
        return (x >= 45 && x <= 60 && y >= 15 && y <= 30);
    };

    const isInAfrica = (x, y) => {
        return (x >= 45 && x <= 65 && y >= 25 && y <= 60) && 
               !(x >= 60 && y >= 50);
    };

    const isInAsia = (x, y) => {
        return (x >= 60 && x <= 90 && y >= 10 && y <= 40) && 
               !(x >= 85 && y >= 35);
    };

    const isInAustralia = (x, y) => {
        return (x >= 75 && x <= 90 && y >= 50 && y <= 60);
    };

    const continentDots = generateContinentDots();

    return (
        <div ref={containerRef} className="threat-intelligence-container">
            <div className="content-wrapper">
                <div className="text-content">
                    <motion.h2 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="section-title"
                    >
                        Step 3: Real-Time Analytics & Threat Intelligence
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="section-description"
                    >
                        Every scan feeds into a live global dashboard that reveals
                        the geographic spread of counterfeit activity.
                    </motion.p>
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="section-description"
                    >
                        Track detection rates, scan volumes, authentication
                        percentages, and estimated financial losses prevented —
                        giving your organization unmatched visibility and control
                        across your supply chain.
                    </motion.p>
                </div>

                <div className="map-container">
                    <motion.div 
                        style={{ scale, opacity }}
                        className="world-map-wrapper"
                    >
                        <svg 
                            viewBox="0 0 100 75" 
                            className="world-map"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            {/* Render continent dots */}
                            {continentDots.map((dot, index) => (
                                <motion.circle
                                    key={index}
                                    cx={dot.x}
                                    cy={dot.y}
                                    r="0.15"
                                    fill="#4a5568"
                                    opacity="0.6"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 0.6, scale: 1 }}
                                    transition={{ 
                                        duration: 0.1, 
                                        delay: index * 0.001,
                                        ease: "easeOut"
                                    }}
                                />
                            ))}
                            
                            {/* Grid lines for coordinate system */}
                            <defs>
                                <pattern id="gridLines" width="5" height="5" patternUnits="userSpaceOnUse">
                                    <path d="M 5 0 L 0 0 0 5" fill="none" stroke="#1a202c" strokeWidth="0.1" opacity="0.3"/>
                                </pattern>
                            </defs>
                            <rect width="100" height="75" fill="url(#gridLines)" opacity="0.2"/>
                            
                            {/* Location pins */}
                            {locations.map((location, index) => (
                                <motion.g 
                                    key={location.id}
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ 
                                        duration: 0.6, 
                                        delay: 1.5 + (index * 0.2),
                                        type: "spring",
                                        stiffness: 200
                                    }}
                                    className="location-pin"
                                >
                                    <circle 
                                        cx={location.x} 
                                        cy={location.y} 
                                        r="1.5" 
                                        fill={location.type === 'authentic' ? '#00ff94' : '#ff0066'}
                                        stroke="#000000"
                                        strokeWidth="0.2"
                                    />
                                    <path 
                                        d={`M${location.x},${location.y - 3} Q${location.x - 1.5},${location.y - 5} ${location.x},${location.y - 6} Q${location.x + 1.5},${location.y - 5} ${location.x},${location.y - 3}`}
                                        fill={location.type === 'authentic' ? '#00ff94' : '#ff0066'}
                                        stroke="#000000"
                                        strokeWidth="0.2"
                                    />
                                    <motion.circle 
                                        cx={location.x} 
                                        cy={location.y} 
                                        r="3" 
                                        fill="none"
                                        stroke={location.type === 'authentic' ? '#00ff94' : '#ff0066'}
                                        strokeWidth="0.5"
                                        opacity="0.4"
                                        animate={{ r: [3, 5, 3] }}
                                        transition={{ 
                                            duration: 2, 
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                </motion.g>
                            ))}
                        </svg>
                    </motion.div>

                    {/* Statistics Panel */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="stats-panel"
                    >
                        <div className="stat-item">
                            <span className="stat-label">Scans:</span>
                            <motion.span 
                                className="stat-value"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1.4 }}
                            >
                                {stats.scans}
                            </motion.span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label authentic-label">• Authentic:</span>
                            <motion.span 
                                className="stat-value"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1.6 }}
                            >
                                {stats.authentic}%
                            </motion.span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label counterfeit-label">• Counterfeit:</span>
                            <motion.span 
                                className="stat-value"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1.8 }}
                            >
                                {stats.counterfeit}%
                            </motion.span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label">Estimated loss prevented:</span>
                            <motion.span 
                                className="stat-value"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 2.0 }}
                            >
                                ${stats.estimatedLoss.toLocaleString()}
                            </motion.span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ThreatIntelligenceMap;
