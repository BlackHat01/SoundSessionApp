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
  faSpeaker,
  faVolumeHigh,
  faHeadphonesAlt,


} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Header = ({ type }) => {
  const { loginWithRedirect } = useAuth0();
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


  const [title, setTitle] = useState('Fill in audio needs');
  const [message, setMessage] = useState('Be sure to include dates, people, recordings, or sessions');

  const submit = () => {
    confirmAlert({
      title,
      message,
      buttons: [
        {
          label: 'Okay',
          //onClick: () => alert('Click Yes')
        },
        // {
        //   label: 'No',
        //   //onClick: () => alert('Click No')
        // }
      ]
    });
  };



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
            <a href="https://capable-ravioli-884.notion.site/Recording-c4a5431f26b8480796d8df58223de136" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}><span>Recording</span></a>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faHeadphonesSimple} />
            <a href="https://www.notion.so/Mixing-ae29ac49948c4d6db011f0f476f18520?pvs=4" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}><span>Mixing</span></a>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faEarListen} />
            <a href="https://faceted-screw-4dd.notion.site/Mastering-53513c42969949db8b76a36ab2334670" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}><span>Mastering</span></a>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faSliders} />
            <a href="https://www.notion.so/Editing-3f9ce06179a84030b61fe52fdb4eadfe?pvs=4" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}><span>Editing</span></a>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faMicrophone} />
            <a href="https://capable-ravioli-884.notion.site/Audio-Equipment-Setup-84d4783fed294e4183382820525bc50d" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}><span>Audio equipment setup</span></a>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faVolumeHigh} />
            <a href="https://faceted-screw-4dd.notion.site/Live-Sound-Engineering-58a59c2decad47b88268610060abfb87" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}><span>Live sound</span></a>
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
            <button onClick={() => loginWithRedirect()} className="headerBtn" style={{ backgroundColor: '#142125' }}>Sign in / Register</button>
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
                <button onClick={destination ? handleSearch : submit}
                  // disabled={!destination}
                  className="headerBtn"
                  style={{ backgroundColor: destination ? '#142125' : '#F0EEED' }}>Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
