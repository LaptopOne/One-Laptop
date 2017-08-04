import React from "react";
import { NavigationBar } from "./NavigationBar/NavigationBar.jsx";
import Footer from "./common/Footer.jsx";
import DonationBanner from "./common/DonationBanner.jsx";

const App = () => {
    return(
      <div className="container">
        <NavigationBar />
        <h1> Hello World </h1>
        <DonationBanner />
        <Footer />
      </div>
    );
};

export default App;
