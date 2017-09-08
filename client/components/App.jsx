import React from "react";

import { NavigationBar } from '../common/NavigationBar/NavigationBar.jsx';
import DonationBanner from '../common/DonationBanner/DonationBanner.jsx';
import Footer from '../common/Footer.jsx';
import Slider from '../components/SliderComponent/Slider.component.jsx';

const App = () => {
    return(
      <div>
        <NavigationBar />
        <Slider />
        <DonationBanner />
        <Footer />
      </div>
    );
};

export default App;
