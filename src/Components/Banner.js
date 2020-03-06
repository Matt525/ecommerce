import React from 'react'
import './Banner.scss';
import winter_banner from './Photo_source/winter_banner.jpg';

const bannerStyle = { 
    height: '400px',
    width: '100%',
    borderRadius: '10px'
}

export default function Banner() {
    return (
        <section class="section-intro py-5">
            <div class="container">
            
            <div  class="intro-banner-wrap">
                <img style={bannerStyle} src={winter_banner} alt="banner" className="img-fluid rounded" />
            </div>
            
            </div> 
        </section>
    )
}
