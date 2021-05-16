const Calendar = () => {
  const dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const renderMonth = (date) => {
    const curDay = date.getDate();
    date.setDate(1);
    const startDay = date.getDay();
    const daysTotal =
      !(date.getFullYear() % 4) && date.getMonth() === 1
        ? 29
        : dayInMonth[date.getMonth()];
  };

  const renderWeek = () => {

  }

  const renderDay = () => {

  }

  return (
    <>
      <div className="calendar">
        <div className="calendar__nav">
          <div className="calendar__left-arrow" />
          <div className="calendar__month">may 2021</div>
          <div className="calendar__right-arrow" />
        </div>
        <div className="separator" />
        <div className="calendar__grid">
          <div className="calendar__week">
            <div className="calendar__day">1</div>
            <div className="calendar__day">2</div>
            <div className="calendar__day">3</div>
            <div className="calendar__day">4</div>
            <div className="calendar__day">5</div>
            <div className="calendar__day">6</div>
            <div className="calendar__day">7</div>
          </div>
          <div className="calendar__week">
            <div className="calendar__day">1</div>
            <div className="calendar__day">2</div>
            <div className="calendar__day">3</div>
            <div className="calendar__day">4</div>
            <div className="calendar__day">5</div>
            <div className="calendar__day">6</div>
            <div className="calendar__day">7</div>
          </div>
          <div className="calendar__week">
            <div className="calendar__day">1</div>
            <div className="calendar__day">2</div>
            <div className="calendar__day">3</div>
            <div className="calendar__day">4</div>
            <div className="calendar__day">5</div>
            <div className="calendar__day">6</div>
            <div className="calendar__day">7</div>
          </div>
          <div className="calendar__week">
            <div className="calendar__day">1</div>
            <div className="calendar__day">2</div>
            <div className="calendar__day">3</div>
            <div className="calendar__day">4</div>
            <div className="calendar__day">5</div>
            <div className="calendar__day">6</div>
            <div className="calendar__day">7</div>
          </div>
          <div className="calendar__week">
            <div className="calendar__day">1</div>
            <div className="calendar__day">2</div>
            <div className="calendar__day">3</div>
            <div className="calendar__day">4</div>
            <div className="calendar__day">5</div>
            <div className="calendar__day">6</div>
            <div className="calendar__day">7</div>
          </div>



        </div>
        <div className="separator" />
        <div className="calendar__day-names">
          <span className="calendar__day-name">S</span>
          <span className="calendar__day-name">M</span>
          <span className="calendar__day-name">T</span>
          <span className="calendar__day-name">W</span>
          <span className="calendar__day-name">T</span>
          <span className="calendar__day-name">F</span>
          <span className="calendar__day-name">S</span>
        </div>
        <div className="separator" />
      </div>
    </>
  );
};

export default Calendar;
