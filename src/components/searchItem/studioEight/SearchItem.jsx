import "./searchItem.css"
import React, { useState } from 'react';
import PannellumReact from "./PannelumReact";


const SearchItem = () => {
  const [showPannellum, setShowPannellum] = useState(false);

  const togglePannellum = () => {
    setShowPannellum(!showPannellum);
  };
  return (
    <div className="searchItem">
      <div className="image-container">
        {showPannellum ? (
          <PannellumReact />
        ) : (
          <img
            src="https://i.guim.co.uk/img/media/fb58f602d8d2ddb7353c5b176c9d35d926b2c10e/0_85_3264_1958/master/3264.jpg?width=1200&quality=85&auto=format&fit=max&s=2ba36a8016cb62a0eb93fb5d5ccb0492"
            alt=""
            className="siImg"
          />
        )}
        <button className="the-button" onClick={togglePannellum}>
          {showPannellum ? 'Switch to Image' : 'Switch to 360° View'}
        </button>
      </div>
      <div className="siDesc">
        <h1 className="siTitle">AZ Sound Studios</h1>
        <span className="siDistance">300m from the University of Arizona</span>
        <span className="siTaxiOp">Free consultation</span>
        <span className="siSubtitle">
          Mixing and Mastering
        </span>
        <span className="siFeatures">
          Recording studio • audio both • sound equipment
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, book this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>9.1</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$85 an hour</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton" onClick={() => window.location.href='https://buy.stripe.com/test_5kA3ez1Io33b3GEeUU'}>
  Book now
</button>

        </div>
      </div>
    </div>
  );
};

export default SearchItem;
