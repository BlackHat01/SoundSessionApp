import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
  faMicrophoneLines,
  faHeadphonesSimple,
  faMicrophone,
  faEarListen,
  faSliders,


} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    people: 1,
    recordings: 0,
    sessions: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/bookaudioengineer", { state: { destination, date, options } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faMicrophoneLines} />
            <a href="https://faceted-screw-4dd.notion.site/Mastering-53513c42969949db8b76a36ab2334670" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}><span>Recording</span></a>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faHeadphonesSimple} />
            <a href="https://faceted-screw-4dd.notion.site/Mastering-53513c42969949db8b76a36ab2334670" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}><span>Mixing</span></a>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faEarListen} />
            <a href="https://faceted-screw-4dd.notion.site/Mastering-53513c42969949db8b76a36ab2334670" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}><span>Mastering</span></a>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faSliders} />
            <a href="https://faceted-screw-4dd.notion.site/Mastering-53513c42969949db8b76a36ab2334670" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}><span>Editing</span></a>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faMicrophone} />
            <a href="https://faceted-screw-4dd.notion.site/Mastering-53513c42969949db8b76a36ab2334670" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}><span>Audio equipment setup</span></a>
          </div>
        </div>

        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              Discover your sound
            </h1>
            <p className="headerDesc">
              Book top audio engineers with ease!
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faHeadphonesSimple} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Your audio needs?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.people} ${options.people <= 1 ? "person" : "people"} · ${options.recordings} ${options.recordings <= 1 ? "recording" : "recordings"} · ${options.sessions} ${options.sessions <= 1 ? "session" : "sessions"}`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">people</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.people <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("people", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.people}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("people", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">recordings</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.recordings <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("recordings", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.recordings}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("recordings", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">sessions</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.sessions <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("sessions", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.sessions}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("sessions", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
