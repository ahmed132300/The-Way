import React, { useState, useEffect } from 'react';
import './Imgs.css'; // Import your CSS file

function ImageSlider({ images }) {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(intervalId);
    }, [images]);

    return (
        <div className="slider">
            <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
        </div>
    );
}

export default ImageSlider;