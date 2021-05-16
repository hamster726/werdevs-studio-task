const Calendar = () => {
  const dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const generateCalendar = (date) => {
    const curDay = date.getDate();
    date.setDate(1);
    const startDay = date.getDay();
    const daysTotal =
      !(date.getFullYear() % 4) && date.getMonth() === 1
        ? 29
        : dayInMonth[date.getMonth()];
  };

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


        </div>
        <div className="separator" />
        <div className="calendar__weeks">
          <span className="calendar__week">S</span>
          <span className="calendar__week">M</span>
          <span className="calendar__week">T</span>
          <span className="calendar__week">W</span>
          <span className="calendar__week">T</span>
          <span className="calendar__week">F</span>
          <span className="calendar__week">S</span>
        </div>
        <div className="separator" />
      </div>
    </>
  );
};

export default Calendar;
