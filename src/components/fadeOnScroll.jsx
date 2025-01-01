import React, { useEffect, useRef, useState } from 'react';
import '../styles/fadeOnScroll.css'; // Asegúrate de crear este archivo CSS

const FadeInOnScroll = ({ children }) => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div 
            ref={ref}
            className={`fade-in ${isVisible ? 'visible' : ''}`}
        >
            {children}
        </div>
    );
};

export default FadeInOnScroll;