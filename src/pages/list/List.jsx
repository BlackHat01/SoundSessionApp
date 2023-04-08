import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/studioOne/SearchItem";
import SearchItem2 from "../../components/searchItem/studioTwo/SearchItem";
import SearchItem3 from "../../components/searchItem/studioThree/SearchItem";
import SearchItem4 from "../../components/searchItem/studioFour/SearchItem";
import SearchItem5 from "../../components/searchItem/studioFive/SearchItem";
import SearchItem6 from "../../components/searchItem/studioSix/SearchItem";
import SearchItem7 from "../../components/searchItem/studioSeven/SearchItem";
import SearchItem8 from "../../components/searchItem/studioEight/SearchItem";
// import SearchItem from "../../components/searchItem/studioOne/SearchItem";
// import SearchItemTwo from "../../components/searchItem/SearchItemTwo";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Audio service interest</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Date-to-book</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price per hour
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price per hour
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">People</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Hours</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Sessions</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            {/* <SearchItemTwo /> */}
            <SearchItem2 />
            <SearchItem3 />
            <SearchItem4 />
            <SearchItem5 />
            <SearchItem6 />
            <SearchItem7 />
            <SearchItem8 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
