import React, { Component } from 'react';

import Header from '../affiliate-home-interface/Header';
import HeroSection from '../affiliate-home-interface/HeroFive';
import Counter from "../affiliate-home-interface/Counter.js";
import FeatureSection from '../affiliate-home-interface/FeatureFive';
import DiscoverSection from '../affiliate-home-interface/DiscoverFive';
import ServiceSection from '../affiliate-home-interface/ServiceFive';
import Work from '../affiliate-home-interface/Work';
import FaqSection from '../affiliate-home-interface/FaqOne';
import Download from '../affiliate-home-interface/Download';
import Subscribe from '../affiliate-home-interface/Subscribe';
import Team from '../affiliate-home-interface/Team';
import ContactSection from '../affiliate-home-interface/Contact';
import FooterSection from '../affiliate-home-interface/Footer';

class ThemeFive extends Component {
    render() {
        return (
            <div className="homepage-5">
                <div className="main">
                    <Header/>
                    <HeroSection />
                    <Counter />
                    <FeatureSection />
                    <Work />
                    <FaqSection />
                    <DiscoverSection />
                    <ServiceSection />
                    <Team />
                    <Download />
                    <Subscribe />
                    <ContactSection />
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default ThemeFive;