import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addDateToList, updateCurrentMonth} from "../redux/actions/actions";

const Calendar = ({callPopUp}) => {

  const {dateList, currentMonth} = useSelector(state => state);
  const dispatch = useDispatch();

  console.log(dateList);

  const dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

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

  const renderDay = (date) => {
    let isCurrentDay = false; // текущий день месяца. Если да, желтый квадратик на дате
    let dayInList = dateList.includes(date.getTime()); // день находится в хранилище\выбран пользователем. Если да, желтая точка под датой
    let isCurrentMonth = date.getMonth() === currentMonth.getMonth(); // текущий ли месяц (не предыдущий). Если нет, цвет серый
    const currDay = new Date();

    if (
      date.getFullYear() === currDay.getFullYear() &&
      date.getMonth() === currDay.getMonth() &&
      date.getDate() === currDay.getDate()
    ) {
      isCurrentDay = true;
    }

    const classnames = `${isCurrentMonth ? "calendar__day calendar__day-current-week" : "calendar__day calendar__day-non-current-week"} ${isCurrentDay ? "calendar__day-active" : ""} ${dayInList ? "calendar__day-in-list" : ""}`

    return (
      <div
        key={date}
        className={classnames}
        onClick={() => addDateToEventList(date)}
      >
        {date.getDate()}
      </div>
    );
  };

  const renderWeek = (daysArray, id) => {
    let daysArrayCopy = daysArray.slice();
    return (
      <div
        key={`week-${id}`}
        className="calendar__week">
        {daysArrayCopy.map((date) => {
        return renderDay(date)})}
    </div>)
  };

  const renderMonth = (date) => {
    const curDay = date.getDate(); // сегодняшний день
    const currMonth = new Date(curDay);
    date.setDate(1); // обнуляем до 1го числа
    const startDay = date.getDay(); // неделя начинается с
    const daysTotal =
      !(date.getFullYear() % 4) && date.getMonth() === 1
        ? 29
        : dayInMonth[date.getMonth()]; // сколько дней в месяце

    const daysArray = Array(35);

    for (let i = 1 - startDay, b = 0; b < daysArray.length; i++, b++) {
      const dateCopy = new Date(date);
      daysArray[b] = new Date(dateCopy.setDate(i));
    }

    const renderedMonth = [];

    for (let i = 0; i < 5; i++) {
      renderedMonth.push(renderWeek(daysArray.slice(i * 7, i * 7 + 7), i));
    }

    return renderedMonth;
  };


  const addDateToEventList = (date) => {
    dispatch(addDateToList(date));
    callPopUp(true, date);
  };


  const changeMonth = (value) => {
    const dateCopy = new Date(currentMonth);
    if (value === "left") {
      dateCopy.setMonth(dateCopy.getMonth()-1);
    }
    if (value === "right"){
      dateCopy.setMonth(dateCopy.getMonth()+1);
    }
    dispatch(updateCurrentMonth(dateCopy));
  }



  return (
    <>
      <div className="calendar">
        <div className="calendar__nav">
          <div className="calendar__left-arrow" onClick={() => {changeMonth("left")}}/>
          <div className="calendar__month">{`${nameOfMonth[currentMonth.getMonth()]} ${currentMonth.getFullYear()}`}</div>
          <div className="calendar__right-arrow" onClick={() => {changeMonth("right")}}/>
        </div>
        <div className="separator"/>
        <div className="calendar__grid">
          {renderMonth(currentMonth)}
        </div>
        <div className="separator"/>
        <div className="calendar__day-names">
          <span className="calendar__day-name">S</span>
          <span className="calendar__day-name">M</span>
          <span className="calendar__day-name">T</span>
          <span className="calendar__day-name">W</span>
          <span className="calendar__day-name">T</span>
          <span className="calendar__day-name">F</span>
          <span className="calendar__day-name">S</span>
        </div>
        <div className="separator"/>
      </div>
    </>
  );
};
export default Calendar;
