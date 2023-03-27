import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://i.guim.co.uk/img/media/fb58f602d8d2ddb7353c5b176c9d35d926b2c10e/0_85_3264_1958/master/3264.jpg?width=1200&quality=85&auto=format&fit=max&s=2ba36a8016cb62a0eb93fb5d5ccb0492"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Emily Sullivan</h1>
          <h2>Recording engineer</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://www.careersinmusic.com/wp-content/uploads/2020/11/audio-engineer-3.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Pheobe Ryan</h1>
          <h2>Mixing engineer</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cdn.shopify.com/s/files/1/0336/3763/0092/articles/2021_08_13.jpg?v=1650323226"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Cody Smith</h1>
          <h2>Mastering engineer</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
