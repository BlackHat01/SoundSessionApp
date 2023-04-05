import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {

  const {data,loading,error} = useFetch("/api/artists/featured");

  console.log(data)
  
  return (
    <div className="featured">
      {loading ? (
        "Loading..."
      ) : (
        <><div className="featuredItem">
        <img
          src={data[0].image}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>{data[0].name}</h1>
          <h2>{data[0].type}</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src={data[1].image}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>{data[1].name}</h1>
          <h2>{data[1].type}</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src={data[2].image}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>{data[2].name}</h1>
          <h2>{data[2].type}</h2>
        </div>
      </div></>
      )
      
      }
    </div>
  );
};

export default Featured;
