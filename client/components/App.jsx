import React from "react";

import { NavigationBar } from '../common/NavigationBar/NavigationBar.jsx';
import DonationBanner from '../common/DonationBanner/DonationBanner.jsx';
import Footer from '../common/Footer.jsx';

const App = () => {
    return(
      <div>
        <NavigationBar />
        <h1> Hello World </h1>
        <DonationBanner />
        <Footer />
      </div>
    );
};

export default App;
