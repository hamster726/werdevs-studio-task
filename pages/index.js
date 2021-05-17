import MainLayout from "../layouts/MainLayout";
import Calendar from "../components/Calendar";
import { useState } from "react";

const Home = () => {

  const nameOfDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const nameOfMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [isShownPopUp, setPopUpShown] = useState(false);
  const [popUpDate, setPopUpDate] = useState(new Date())

  const callPopUp = (bool, date) => {
    setPopUpShown(bool)
    setPopUpDate(date);
  }

  const renderPopUp = (date) => {
    return (
      <div className="popup-container">
        <div className="popup">
          <form className="popup__form">
            <label className="popup__label">Month</label>
            <input
              className="popup__input"
              type="text"
              placeholder={nameOfMonth[date.getMonth()]}
              readOnly
            />
          </form>
          <form className="popup__form">
            <label className="popup__label">Day</label>
            <input
              className="popup__input"
              type="text"
              placeholder={`${date.getDate()}th ${nameOfDay[date.getDay()]}`}
              readOnly
            />
          </form>
          <div
            className="popup__close-button"
            onClick={() => setPopUpShown(false)}
          >×</div>
        </div>
      </div>
    );
  };

  return (
    <MainLayout>
      <main className="main">
        <div className="main__text-container">
          <h1 className="main__title">
            Choose the day <br /> for the meeting
          </h1>
          <div className="main__description">
            We encourage you to book your
            <br /> appointment online.
            <br />
            This will save you time.
          </div>
        </div>
        <div className="calendar__container">
          <Calendar callPopUp={callPopUp}/>
        </div>
      </main>
      {isShownPopUp ? renderPopUp(new Date()): ''}
    </MainLayout>
  );
};

export default Home;
