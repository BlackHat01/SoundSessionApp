import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://www.therecordco.org/wp-content/uploads/2021/11/IMG_0414-2048x1536.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Kevin Taylor</span>
        <span className="fpCity">Oro Valley</span>
        <span className="fpPrice">Starting from $40 an hour</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e7/AugustRecordingSonJarochoWikiLearning020.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Logan Lee</span>
        <span className="fpCity">Downtown Tucson</span>
        <span className="fpPrice">Starting from $120 an hour</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://whisperroom.com/wp-content/uploads/2019/02/MuyinzaInStudio-553x415-1.png"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Olivia Foster</span>
        <span className="fpCity">University of Arizona</span>
        <span className="fpPrice">Starting from $99 an hour</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.bmi.com/cache/images/news/2022/JulyMW-Photo-of-the-Month_770_433_70_s.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Caleb Wright</span>
        <span className="fpCity">Catalina Foothills</span>
        <span className="fpPrice">Starting from $105 an hour</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
