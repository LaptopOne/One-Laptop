import React from 'react';



const Slider = () => {
  return (
    <div className="slider">
      <ul className="slides">
        <li>
          <img src="https://www.globalgiving.org/pfil/9292/DSC_0293_Large.jpg" />
          <div className="caption center-align">
            <h3>Giving Back</h3>
            <h5 className="light grey-text text-lighten-3">Touching lives...</h5>
          </div>
        </li>
        <li>
          <img src="http://wiki.laptop.org/images/0/00/Galadima0.jpg" />
          <div className="caption center-align">
            <h3>Giving Back</h3>
            <h5 className="light grey-text text-lighten-3">Touching lives...</h5>
          </div>
        </li>
        <li>
          <img src="https://cdn.theatlantic.com/assets/media/img/mt/2014/08/RTR1QCYN/lead_large.jpg" />
          <div className="caption center-align">
            <h3>Equipping the Leaders of tomorrow</h3>
            <h5 className="light grey-text text-lighten-3">with the right tools...</h5>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Slider;
