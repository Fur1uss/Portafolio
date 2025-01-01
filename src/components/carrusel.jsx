import React, { useEffect, useRef } from 'react';
import '../styles/infiniteCarousel.css';

import CSSImage from "../assets/carousel/css.png";
import HTMLImage from "../assets/carousel/html.png";
import JSImage from "../assets/carousel/javascript.png";
import REACTImage from "../assets/carousel/react.png";
import EXPOImage from "../assets/carousel/expo.png";
import FIREBASEImage from "../assets/carousel/firebase.png";
import GITImage from "../assets/carousel/git.png";
import SQLImage from "../assets/carousel/sql.png";
import FIGMAImage from "../assets/carousel/figma.png";

const InfiniteCarousel = () => {
    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        let interval;

        const startCarousel = () => {
            interval = setInterval(() => {
                if (carousel) {
                    carousel.scrollLeft += 1;
                    if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
                        carousel.scrollLeft = 0;
                    }
                }
            }, 20); // Adjust the speed by changing the interval time
        };

        startCarousel();

        return () => clearInterval(interval);
    }, []);

    const images = [
        { src: CSSImage, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { src: HTMLImage, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { src: JSImage, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { src: REACTImage, link: "https://es.react.dev/" },
        { src: EXPOImage, link: "https://expo.dev/" },
        { src: FIREBASEImage, link: "https://firebase.google.com/" },
        { src: GITImage, link: "https://git-scm.com/" },
        { src: SQLImage, link: "https://www.mysql.com/" },
        { src: FIGMAImage, link: "https://www.figma.com/" }
    ];

    return (
        <div className="carousel-outer-container">
            <div className="carousel-container" ref={carouselRef}>
                {[...images, ...images].map((image, index) => (
                    <div className="carousel-item" key={index}>
                        <a href={image.link} target="_blank" rel="noopener noreferrer">
                            <img src={image.src} alt={`carousel-item-${index}`} />
                        </a>
                    </div>
                ))}

                {[...images, ...images].map((image, index) => (
                    <div className="carousel-item" key={index}>
                        <a href={image.link} target="_blank" rel="noopener noreferrer">
                            <img src={image.src} alt={`carousel-item-${index}`} />
                        </a>
                    </div>
                ))}

                {[...images, ...images].map((image, index) => (
                    <div className="carousel-item" key={index}>
                        <a href={image.link} target="_blank" rel="noopener noreferrer">
                            <img src={image.src} alt={`carousel-item-${index}`} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteCarousel;
