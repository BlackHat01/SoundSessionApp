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
            src="https://media.blogto.com/articles/20170623-unionsound-10.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70"
            alt=""
            className="siImg"
          />
        )}
        <button className="the-button" onClick={togglePannellum}>
          {showPannellum ? 'Switch to Image' : 'Switch to 360° View'}
        </button>
      </div>
      <div className="siDesc">
        <h1 className="siTitle">Desert Sound Studios</h1>
        <span className="siDistance">1.5km from the University of Arizona</span>
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
          <span>Great</span>
          <button>8.6</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$80 an hour</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton" onClick={() => window.open('https://buy.stripe.com/test_5kA3ez1Io33b3GEeUU', '_blank')}
>
  Book now
</button>

        </div>
      </div>
    </div>
  );
};

export default SearchItem;
