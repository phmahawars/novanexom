import React from 'react';

import SectiobImg from '/assets/images/new/Mid-banner.jpg'

const ImageSection = () => {
    return (
        <div className="section-image" data-aos="fade-up" data-aos-delay="200">
            <img src={SectiobImg} alt=""  />
        </div>
    );
};

export default ImageSection;